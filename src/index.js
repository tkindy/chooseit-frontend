import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return (
    <div>
      <Coin status={"Not yet flipped"} />
      <button>Flip</button>
    </div>
  );
};

const Coin = (props) => {
  return <p>{props.status}</p>;
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
