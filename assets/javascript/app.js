
$(document).ready(function () {

    $("#form").submit(function (event) {
        event.preventDefault();

        var name = $("#name").val().trim();
        var destination = $("#destination").val().trim();
        var arrival = $("#arrival").val().trim();
        var frequency = $("#frequency").val().trim();


        // var name = event.target.name.value;
        // var destination = event.target.destination.value;
        // var frequency = event.target.frequency.value;
        // var arrival = event.target.arrival.value;

        var dataRef = firebase.database().ref("/trains");
        dataRef.push({
            name: name,
            destination: destination,
            arrival: arrival,
            frequency: frequency,
        })

        console.log(dataRef);



        // clear the input boxes
        $('#name').val("");
        $('#destination').val("");
        $('#arrival').val("");
        $('#frequency').val("");

    })


    firebase.database().ref("/trains").on("value", function (snapshot) {

        console.log(snapshot.val());

        // grab a snapshot of the info from firebase
        var name = snapshot.val().name;
        var destination = snapshot.val().destination;
        var arrival = snapshot.val().arrival;
        var frequency = snapshot.val().frequency;

      

        // append data to table
        var newRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(destination),
            $("<td>").text(arrival),
            $("<td>").text(frequency),



        );

        $("#table > tbody").prepend(newRow);

    })

})