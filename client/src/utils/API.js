import axios from "axios";

export default {

  getPosts: function() {
    return axios.get("/api/posts");
  },  

  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },

  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },

  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};
