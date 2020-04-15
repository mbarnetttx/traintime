var firebaseConfig = {
    apiKey: "AIzaSyC1gbx244ltkXbYBrOoIGxdAenrdTEt7d4",
    authDomain: "traincatch-d4aa5.firebaseapp.com",
    databaseURL: "https://traincatch-d4aa5.firebaseio.com",
    projectId: "traincatch-d4aa5",
    storageBucket: "traincatch-d4aa5.appspot.com",
 
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var dataRef = firebase.database();

    var trainName = "";
    var destination = "";
    var frequency = "";
    var nextArrival = "";
    
    
$("#submit").on("click", function(event) {
    console.log("iwork");
    
    event.preventdefault();
  

    // grab values from input boxes
    trainName = $("#trainname").val().trim();
    destination = $("#destination").val().trim();
    nextArrival = $("#nextarrival").val().trim();
    frequency = $("#frequency").val().trim();
    console.log(trainName);

     // clear the input boxes
     $('#trainname').val("");
     $('#destination').val("");
     $('#nextarrival').val("");
     $('#frequency').val("");

    // add aliases to variables to send to firebase

dataRef.ref().push({
    
        name: trainName,
        dest: destination,
        first: nextArrival,
        freq: frequency,
    })

    // push to firebase
    // dataRef.ref().push(newTrain);

})
    // console.log(newTrain);
    // alert("Added")
    // clear the input boxes
    // $('#trainname').val("");
    // $('#destination').val("");
    // $('#nextarrival').val("");
    // $('#frequency').val("");

    

    dataRef.ref().on("child_added", function (childSnapshot) {

        

    // grab a snapshot of the info from firebase
    var tName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().dest;
    var trainFirst = childSnapshot.val().first;
    var trainFreq = childSnapshot.val().freq;

    // append data to table
    var newRow = $("<tr>").append(
        $("<td>").text(tName),
        $("<td>").text(trainDest),
        $("<td>").text(trainFirst),
        $("<td>").text(trainFreq),

        

    );

    $("#table > tbody").prepend(newRow);





    });










