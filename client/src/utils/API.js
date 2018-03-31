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
  },


  //==========================APIs for Messaging =================================
  getConversations: function(){
    return axios.get("/api/conversations");
  },
  getMessages: function(cid){
    return axios.get("/api/conversations/" + cid);
  },
  startConversation: function(ownerId){
    return axios.post("/api/conversations/" + ownerId)
  },
  newMessage: function(messageData){
    return axios.post("/api/messages/", messageData);
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