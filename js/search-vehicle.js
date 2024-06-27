$(document).ready(
    function() {
    $('#searchVehicleForm').on('submit', function(e) {
        e.preventDefault();
        
        let carPlate = $('#carPlateInput').val().toLowerCase();
        let carModel = $('#carModelInput').val().toLowerCase();
        let carBrand = $('#carBrandInput').val().toLowerCase();

        if(!carBrand && !carModel && !carPlate){
            return alert("fill at least one of the fields");
        }

        let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        
        let searchResults = $('#searchResults');
        searchResults.empty();

        let carList = document.createElement("ul");
        carList.classList.add("carList");
        carList.setAttribute("id","carList");

        let foundVehicles = vehicles.filter(vehicle => carPlate ? vehicle.plate.toLowerCase().includes(carPlate) : 
            vehicle.model.toLowerCase().includes(carModel) || vehicle.brand.toLowerCase().includes(carBrand));

        if (foundVehicles.length === 0) {
            searchResults.append('<li>No matching vehicles found.</li>');
        } else {
            foundVehicles.forEach(vehicle => {
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
            document.getElementById("searchResults").appendChild(carList);
        }
    });     
    }
);
