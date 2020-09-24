import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-11cf6.firebaseio.com/",
});

export default instance;