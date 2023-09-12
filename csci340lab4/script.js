let isDuck = true;
function fetchDuckImage() {
    $.ajax({
        url: 'https://random-d.uk/api',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            document.getElementById('currentImage').src = data.url;
            isDuck = true;
        },
        error: function(error) {
            console.error("Error fetching duck image:", error);
        }
    });
}

function fetchBearImage() {
    document.getElementById('currentImage').src = 'https://placebear.com/200/300';
    isDuck = false;
}

function switchImage() {
    if (isDuck) {
        fetchBearImage();
    } else {
        fetchDuckImage();
    }
}

$(document).ready(function() {
    fetchDuckImage();
});
