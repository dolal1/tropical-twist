import axios from "axios";

const instance = axios.create({
  bbaseURL: "...", //API(Cloud Function) URL
});

export default instance;
