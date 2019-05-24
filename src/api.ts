import request from 'request-promise-native';

const baseUrl = "http://chooseit-api.tylerkindy.com";

const createRoom = () => {
  const options = {
    method: 'POST',
    uri: `${baseUrl}/new-room`,
  };
  return request(options);
};

const getRoomStatus = (id: string) => {
  const options = {
    method: 'GET',
    uri: `${baseUrl}/room/${id}`,
  };
  return request(options);
};

const flipCoin = (id : string) => {
  const options = {
    method: 'POST',
    uri: `${baseUrl}/room/${id}/flip`,
  };
  return request(options);
}

const api = {
  createRoom,
  getRoomStatus,
  flipCoin,
};

export default api;
