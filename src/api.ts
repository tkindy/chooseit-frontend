import request from 'request-promise-native';

const baseUrl = "http://chooseit-api.tylerkindy.com";

const createRoom = () => {
  const options = {
    method: 'POST',
    uri: `${baseUrl}/new-room`,
  };
  return request(options);
};

const api = {
  createRoom
};

export default api;
