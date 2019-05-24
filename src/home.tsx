import React from 'react';
import api from './api';
import { Redirect } from 'react-router';

interface HomeState {
  id: string | undefined
}

class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      id: undefined,
    };
  }

  render() {
    if (this.state.id) {
      return <Redirect to={`/room/${this.state.id}`} />
    }

    return (
      <div>
        <h1>ChooseIt</h1>
        <h2>Make decisions with friends</h2>
        <button
          onClick={() => this.handleNewRoom()}
        >
          New room
        </button>
      </div>
    );
  }

  handleNewRoom() {
    api.createRoom()
      .then(id => this.setState({ id }));
  }
}

export default Home;
