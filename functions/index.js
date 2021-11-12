const functions = require("firebase-functions");
const request = require('request')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.getToilets = functions.https.onRequest( async (_req, _res) => {

//   await request.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.896035%2C12.513051&radius=1000&type=point_of_interest&keyword=toilet&key=AIzaSyDOe9lVLhQt8Vo3zPXxMO0nRP1TcTNnpiE', (err, res, body) => {
//     _res.send(body.results)
//   })

// });

exports.getToilets = functions.https.onRequest( async (_req, _res) => {

  await request.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + _req.query.lat + '%2C' + _req.query.long + '&radius=1000&type=point_of_interest&keyword=toilet&key=AIzaSyDOe9lVLhQt8Vo3zPXxMO0nRP1TcTNnpiE', (err, res, body) => {
    _res.send(body)
  })

});

// const mapsApiKey = require('maps')(functions.config().maps.api)
