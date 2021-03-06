import request from "request-promise-native";
import { RoomView } from "./model";

const baseUrl = process.env.REACT_APP_BASE_URL;
const roomBaseUrl = `${baseUrl}/rooms`;

const createRoom = (name: string, singleFlip: boolean): Promise<RoomView> => {
  const options = {
    method: "POST",
    url: `${roomBaseUrl}`,
    qs: { name, singleFlip },
    json: true,
  };
  return request(options);
};

const getRoom = (id: string): Promise<RoomView> => {
  const options = {
    method: "GET",
    uri: `${roomBaseUrl}/${id}`,
    json: true,
  };
  return request(options);
};

const flipCoin = (id: string): Promise<void> => {
  const options = {
    method: "POST",
    uri: `${roomBaseUrl}/${id}/flip`,
  };
  return request(options);
};

const api = {
  createRoom,
  getRoom,
  flipCoin,
};

export default api;
