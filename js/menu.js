
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

        let wrapper = $("#carListWrapper");
        wrapper.empty();

        let carList = document.createElement("ul");
        carList.classList.add("carList");
        carList.setAttribute("id","carList");

        if (vehicles.length === 0) {
            carList.append('<li>No vehicles in the database.</li>');
        } else {
            vehicles.forEach(vehicle => {
                carList.innerHTML +=
                    `<li>
                        <img src="../assets/imgs/car-no-Image.png" />
                        <div class="infoWrapper">
                            <p>Brand: ${vehicle.brand}</p>
                            <p>Model: ${vehicle.model}</p>
                            <p>Color: ${vehicle.color}</p>
                            <p>Plate: ${vehicle.plate}</p>
                        </div>
                    </li>`;
            });
            document.getElementById("carListWrapper").appendChild(carList);

        }
    })

});

