import React from 'react';

interface RoomProps {

}

const Room = (_: RoomProps) => {
  return (
    <div>
      <Coin status={"Not yet flipped"} />
      <button>Flip</button>
    </div>
  );
};

interface CoinProps {
  status: string
}

const Coin = (props: CoinProps) => {
  return <p>{props.status}</p>;
};

export default Room;
