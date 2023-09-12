let isDuck = true;

function fetchDuckImage() {
    $.ajax({
        url: 'https://random-d.uk/api/v2',
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

function fetchBearImage() {
    document.getElementById('bearImage').src = 'https://placebear.com/200/300';
}

$(document).ready(function() {
    fetchDuckImage();
    fetchBearImage();
});
