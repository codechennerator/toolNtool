const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/toolNtoolDB",
  {
    useMongoClient: true
  }
);


const postSeed = [
  {
    title: "Hammer",
    user: "Stephen",
    description:"Hammer available from 03/05/2018 ~ 05/15/2018",
    date: new Date(Date.now())
  },
  {
    title: "Screw Driver",
    user: "James",
    description:"Screw Driver available. Msg me for details",
    date: new Date(Date.now())
  },
  {
    title: "11ft ladder" ,
    user: "Koni",
    description:"11 ft tall ladder is ready for rent",
    date: new Date(Date.now())
  },
  {
    title: "drill",
    user: "Soni",
    description:"Msg me for details",
    date: new Date(Date.now())
  }

];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
