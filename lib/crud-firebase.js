let util = require('./util');
let admin = require("firebase-admin");

// Fetch the service account key JSON file contents
let serviceAccount = require(util.getPath(".credential/glass-turbine-148103-firebase-adminsdk-n0gsz-0503c65cb3.json"));

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://glass-turbine-148103.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
let db = admin.database();
