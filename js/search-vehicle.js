$(document).ready(
    function() {
    $('#searchVehicleForm').on('submit', function(e) {
        e.preventDefault();
        let carPlate = $('#carPlateInput').val().toLowerCase();
        let carModel = $('#carModelInput').val().toLowerCase();
        let carBrand = $('#carBrandInput').val().toLowerCase();

        let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        
        let searchResults = $('#searchResults');
        searchResults.empty();

        let foundVehicles = vehicles.filter(vehicle => 
            vehicle.plate.toLowerCase().includes(carPlate) ||
            vehicle.model.toLowerCase().includes(carModel) ||
            vehicle.brand.toLowerCase().includes(carBrand)
        );

        if (foundVehicles.length === 0) {
            searchResults.append('<li>No matching vehicles found.</li>');
        } else {
            foundVehicles.forEach(vehicle => {
                searchResults.append(
                    `<li>
                        <p>Brand: ${vehicle.brand}</p>
                        <p>Model: ${vehicle.model}</p>
                        <p>Color: ${vehicle.color}</p>
                        <p>Plate: ${vehicle.plate}</p>
                    </li>`
                );
            });
        }
    });     
    }
);
