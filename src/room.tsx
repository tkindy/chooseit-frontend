import React from 'react';
import { RouteComponentProps } from 'react-router';
import api from './api';
import { withHeader } from './common';

interface RoomParams {
  id: string,
}

type RoomProps = RouteComponentProps<RoomParams>

interface RoomState {
  name: string,
  status: string,
  intervalId: Promise<number>,
  canFlip: boolean,
}

class Room extends React.Component<RoomProps, RoomState> {
  constructor(props: RoomProps) {
    super(props);

    const id = props.match.params.id;
    const intervalId = this.setUpdateInterval(id);

    this.state = {
      name: 'Loading...',
      status: 'Loading...',
      intervalId: intervalId,
      canFlip: false
    };
  }

  async setUpdateInterval(id: string): Promise<number> {
    return this.updateRoom(id)
      .then(() => window.setInterval(() => this.updateRoom(id), 2000));
  }

  async updateRoom(id: string) {
    try {
      const room = await api.getRoom(id);
      return this.setState({
        name: room.name,
        status: room.state,
        canFlip: room.canFlip,
      });
    }
    catch (err) {
      console.log(err);
      this.setState({
        status: `Error refreshing room: ${err}`,
      });
    }
  }

  handleFlip(id: string) {
    this.state.intervalId
      .then(intervalId => window.clearInterval(intervalId))
      .then(() => api.flipCoin(id))
      .then(() => this.setUpdateInterval(id));
  }

  alreadyFlippedMessage() {
    if (!this.state.canFlip) {
      return <b>Already flipped</b>;
    }
    return <b></b>;
  }

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <Coin status={this.state.status} />
        <button
          onClick={() => this.handleFlip(this.props.match.params.id)}
          disabled={!this.state.canFlip}
        >
          Flip
        </button>
        {}
      </div>
    );
  }
}

interface CoinProps {
  status: string
}

const Coin = (props: CoinProps) => {
  return <p>{props.status}</p>;
};

export default withHeader(Room);
