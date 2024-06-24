
$(document).ready(
    function() {
    $('#addVehicleButton').click(function(e) {
            window.location.href = 'add-vehicle.html';
    });

    $('#removeVehicleButton').click(function(e) {
        window.location.href = 'remove-vehicle.html';
    });
    $('#searchVehicleButton').click(function(e) {
        window.location.href = 'search-vehicle.html';
    });

    $('#listAllVehiclesButton').click(function (e) {
        let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        let carList = $('#carList');
        console.log(vehicles);
        carList.empty();

        if (vehicles.length === 0) {
            carList.append('<li>No vehicles in the database.</li>');
        } else {
            vehicles.forEach(vehicle => {
                carList.append(
                    `<li>
                        <p>Brand: ${vehicle.brand}</p>
                        <p>Model: ${vehicle.model}</p>
                        <p>Color: ${vehicle.color}</p>
                        <p>Plate: ${vehicle.plate}</p>
                    </li>`
                );
            });
        }
    })

});

