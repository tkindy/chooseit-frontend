import React from 'react';
import { RouteComponentProps } from 'react-router';
import api from './api';
import { withHeader } from './common';

interface RoomParams {
  id: string,
}

type RoomProps = RouteComponentProps<RoomParams>

interface RoomState {
  status: string,
  intervalId: number,
}

class Room extends React.Component<RoomProps, RoomState> {
  constructor(props: RoomProps) {
    super(props);

    const id = props.match.params.id;
    const intervalId = this.setUpdateInterval(id);

    this.state = {
      status: 'Loading...',
      intervalId: intervalId,
    };
  }

  setUpdateInterval(id: string): number {
    return window.setInterval(() => this.updateStatus(id), 2000);
  }

  updateStatus(id: string) {
    api.getRoomStatus(id)
      .then(room => this.setState({ status: room.state }))
      .catch(err => {
        console.log(err);
        this.setState({
          status: `Error getting room status: ${err}`,
        })
      });
  }

  handleFlip(id: string) {
    window.clearInterval(this.state.intervalId);
    api.flipCoin(id)
      .then(() => {
        this.updateStatus(id);
        this.setUpdateInterval(id);
      });
  }

  render() {
    return (
      <div>
        <Coin status={this.state.status} />
        <button
          onClick={() => this.handleFlip(this.props.match.params.id)}
        >
          Flip
          </button>
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
