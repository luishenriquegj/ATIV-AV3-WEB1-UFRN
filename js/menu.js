
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

});
