$(document).ready(function() {
    $('#addVehicleForm').on('submit', function(event) {
        event.preventDefault();

        let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        let vehicle = {
            photo: $('#carPhotoInput').val(),
            brand: $('#carModelInput').eq(0).val(),
            model: $('#carModelInput').eq(1).val(),
            color: $('#carColorInput').val(),
            plate: $('#carPlateInput').val()
        };

        if(vehicles.some(vehicle => vehicle.plate === vehicle.plate)) {
            alert('Vehicle alerady on database!');
            return;
        }else{
            vehicles.push(vehicle);
            localStorage.setItem('vehicles', JSON.stringify(vehicles));
        }        
    });
    
});