import request from 'request-promise-native';

const baseUrl = "http://chooseit-api.tylerkindy.com";
const roomBaseUrl = `${baseUrl}/rooms`;

const createRoom = () => {
  const options = {
    method: 'POST',
    uri: `${roomBaseUrl}/new`,
  };
  return request(options);
};

const getRoomStatus = (id: string) => {
  const options = {
    method: 'GET',
    uri: `${roomBaseUrl}/${id}`,
  };
  return request(options);
};

const flipCoin = (id : string) => {
  const options = {
    method: 'POST',
    uri: `${roomBaseUrl}/${id}/flip`,
  };
  return request(options);
};

const api = {
  createRoom,
  getRoomStatus,
  flipCoin,
};

export default api;
