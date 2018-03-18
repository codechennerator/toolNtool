import axios from "axios";

export default {
  
  //fetching post by id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },  

  //deleting post
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  //pushing post into the DB
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};

  // getPosts: function() {
  //   return axios.get("/api/posts");
  // },
  // moved to dataAction

    // getPostByTitle: function(title) {
  //   return axios.get("/api/posts/title/" + title);
  // }, 
  // moved to dataAction