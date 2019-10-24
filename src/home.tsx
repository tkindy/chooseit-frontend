import React from 'react';
import api from './api';
import { Redirect } from 'react-router';
import { withHeader } from './common';

interface HomeState {
  id: string | undefined,
  newName: string
}

class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      id: undefined,
      newName: ""
    };
  }

  render() {
    if (this.state.id) {
      return <Redirect to={`/room/${this.state.id}`} />
    }

    return (
      <div>
        <label>Room name
        <input
          type="text"
          onChange={(event) => this.setState({ newName: event.target.value })}
        />
        </label>
        <button
          onClick={() => this.handleNewRoom(this.state.newName)}
        >
          Create room
        </button>
      </div>
    );
  }

  handleNewRoom(name: string) {
    api.createRoom(name)
      .then(room => {
        this.setState({ id: room.id });
      });
  }
}

export default withHeader(Home);
