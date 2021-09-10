import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID PXAL6AOxj3ODlAOo0Bf7XwDYN5R8XuUZJ2fWWjqAl0A",
  },
});
