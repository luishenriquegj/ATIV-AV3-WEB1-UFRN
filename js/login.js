function getCurrentStoredData(){
    return JSON.parse(localStorage.getItem("storedData")) || [];
}

function populateStorage() {
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify({
        username: 'admin',
        password: 'admin'
    }));
}

$(document).ready(
    function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const username = $('#usernameInput').val();
        const password = $('#passwordInput').val();

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            // Redirect to a new page on successful login
            window.location.href = 'menu.html';
        } else {
            // Reload the login page on error
            alert('Invalid username or password. Please try again.');
        }
    });

});
