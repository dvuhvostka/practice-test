const firebase = require("firebase");


if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyBEB0UzCqsgbTKNg7xCqNlNN7IfNsuCXtU',
        authDomain: 'users-test-378d1.firebaseapp.com',
        projectId: 'users-test-378d1'
      });
}

var db = firebase.firestore();

export default (req, res) => {

    db.collection("users").add({
        email: req.body.user.email,
        phone: req.body.user.phone,
        name: req.body.user.name
    })
    .then((docRef) => {
        console.log("User written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding user: ", error);
    });
    res.status(200).json({ status: 'OK' })
}