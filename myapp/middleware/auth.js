const { auth } = require("firebase-admin");
var admin = require("firebase-admin");

var serviceAccount = require("./secret.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://depslipts-test-1.firebaseio.com",
});

const authenticate = async (token) => {
  // console.log(token)

  try{
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log("Token decoded successfully");
    return {
      verified: true,
      message: 'SUCCESSFUL',
      userId: decodedToken.user_id,
      email: decodedToken.email,
    };

  }catch(error){
    console.log("Token decode failed");
      return {
        verified: false,
        message: error
      };
  }
  // admin
  //   .auth()
  //   .verifyIdToken(token)
  //   .then((decodedToken) => {
  //     console.log("Token decoded successfully");
  //     return {
  //       verified: true,
  //       message: 'SUCCESSFUL',
  //       userId: decodedToken.user_id,
  //       email: decodedToken.email,
  //     };
  //   })
  //   .catch((error) => {
  //     console.log("Token decode failed");
  //     return {
  //       verified: false,
  //       message: error,
  //       userId: decodedToken.user_id,
  //       email: decodedToken.email,
  //     };
  //   });
};

module.exports = authenticate;
