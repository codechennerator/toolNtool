<<<<<<< HEAD
module.exports = {
    "googleClientID": "142210993208-eketnu01d5j3oln551sk3rufrc6sbvaf.apps.googleusercontent.com",
    "googleClientSecret": "N6WIbNJUNB0fUx53t8WSYR9A",
    "mongoURI": "mongodb://toolntooladmin:toolntool123@ds261678.mlab.com:61678/heroku_c0hzwfm7",
    "cookieKey": "wieofjaoi2125OIQWEFJOIJ2"
=======
//!!CONFIGURE THESE VARIABLES IN PRODUCTION.

module.exports = {
    "googleClientID": process.env.GOOGLE_CLIENT_ID,
    "googleClientSecret": process.env.GOOGLE_CLIENT_SECRET,
    "mongoURI": process.env.MONGO_URI,
    "cookieKey": process.env.COOKIE_KEY
>>>>>>> 0c6f451caab3401a30e1c1da23264be693226198
};