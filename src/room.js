import React from 'react';

const Room = (props) => {
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

export default Room;
