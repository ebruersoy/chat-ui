import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:8090/api/v1/",
});

const chatAPI = {
  getMessages: () => {
    return api.get(`messages`);
  },
  sendMessage: (username, text) => {
    let msg = {
      sender: username,
      content: text,
    };
    return api.post(`send`, msg);
  },
};

export default chatAPI;
