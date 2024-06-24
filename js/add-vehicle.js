$(document).ready(function() {
    $('#addVehicleForm').on('submit', function(event) {
        event.preventDefault();

        let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        let addedVehicle = {
            photo: $('#carPhotoInput').val(),
            brand: $('#carBrandInput').val(),
            model: $('#carModelInput').val(),
            color: $('#carColorInput').val(),
            plate: $('#carPlateInput').val()
        };

        if(vehicles.some(vehicle => vehicle.plate === addedVehicle.plate)) {
            alert('Vehicle alerady on database!');
            return;
        }else{
            vehicles.push(addedVehicle);
            localStorage.setItem('vehicles', JSON.stringify(vehicles));
        }        
    });
    
});