var firebaseConfig = {
    apiKey: "AIzaSyC1gbx244ltkXbYBrOoIGxdAenrdTEt7d4",
    authDomain: "traincatch-d4aa5.firebaseapp.com",
    databaseURL: "https://traincatch-d4aa5.firebaseio.com",
    projectId: "traincatch-d4aa5",
    storageBucket: "traincatch-d4aa5.appspot.com",
    messagingSenderId: "439222683318",
    appId: "1:439222683318:web:f5fd1b5ee49ada47e58817"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.databse();

  var trainName = "";
  var destination = "";
  var frequency = 0;
  var nextArrival = 0;
  var minAway = 0;
  var input = "";
  var addTrain = {
      name: trainName,
      dest: destination,
      freq: frequency,
      time: nextArrival
  }