import React from "react";
import api from "./api";
import { Redirect } from "react-router";
import { withHeader } from "./common";

interface HomeState {
  id: string | undefined;
  newName: string;
  singleFlip: boolean;
}

class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      id: undefined,
      newName: "",
      singleFlip: false,
    };
  }

  render() {
    if (this.state.id) {
      return <Redirect to={`/room/${this.state.id}`} />;
    }

    return (
      <div>
        <div>
          <label>
            Room name
            <input
              type="text"
              onChange={event => this.setState({ newName: event.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Single flip?
            <input
              type="checkbox"
              onChange={event =>
                this.setState({ singleFlip: event.target.checked })
              }
            />
          </label>
        </div>
        <div>
          <button
            onClick={() =>
              this.handleNewRoom(this.state.newName, this.state.singleFlip)
            }
          >
            Create room
          </button>
        </div>
      </div>
    );
  }

  handleNewRoom(name: string, singleFlip: boolean) {
    api.createRoom(name, singleFlip).then(room => {
      this.setState({ id: room.id });
    });
  }
}

export default withHeader(Home);
