
$(document).ready(function() {
    $('#clicker').click(function() {
    function fetchDuckImage() {
        $.ajax({
            url: 'https://random-d.uk/',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                document.getElementById('duckImage').src = data.url;
            },
            error: function(error) {
                console.error("Error fetching duck image:", error);
            }
        });
}

function fetchCatImage() {
    document.getElementById('catImage').src = 'https://api.thecatapi.com/v1/images/search';
}
    })})