$(document).ready(
    function() {
    $('#removeForm').on('submit', function(e) {
        e.preventDefault();
        let carPlate = $('#carPlateInput').val().toLowerCase();

        let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];

        let vehicleIndex = vehicles.indexOf(vehicle => 
            vehicle.plate.toLowerCase().includes(carPlate.toLowerCase())
        );
        console.log(vehicles);
        console.log(carPlate);
        vehicles.splice(vehicleIndex,1);
        console.log(vehicles);
        
        localStorage.removeItem("vehicles");
        
        localStorage.setItem("vehicles",JSON.stringify(vehicles));
            alert("deleted");
        
    });     
    }
);
