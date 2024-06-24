$(document).ready(function() {
    $('#searchButton').on('submit', function searchVehicle() {
        let searchTerm = $('#searchInput').val().toLowerCase();
        let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        let searchResults = $('#searchResults');
        searchResults.empty();

        let foundVehicles = vehicles.filter(vehicle => 
            vehicle.plate.toLowerCase().includes(searchTerm) ||
            vehicle.model.toLowerCase().includes(searchTerm) ||
            vehicle.brand.toLowerCase().includes(searchTerm)
        );
        console.log(foundVehicles,vehicles);

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
    }
);     
});