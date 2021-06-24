import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/tropical-twist/us-central1/api",
  //API(Cloud Function) URL
});

export default instance;
