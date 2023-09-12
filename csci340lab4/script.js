
$(document).ready(function() {}
    $('#clicker').click(function() {
        $.ajax({
            url: 'https://random-d.uk/api/quack',
            dataType: 'json',
            success: function(results) {
                console.log(results["url"]);
                if (results["url"].endsWith(".mp4")) {
                    $('#duckImage').attr("src", "images/blank.png");
                } else {
                    $('#duckImage').attr("src", results["url"]);
                }
            },
            error: function(error) {
                console.error("Error fetching duck image:", error);
            }
    }),
        $.ajax({
            url: "https://api.thecatapi.com/v1/images/search",
            dataType: 'json',
            success: function(data) {
                console.log(results["url"]);
                if (results["url"].endsWith(".mp4")) {
                    $('#catImage').attr("src", "images/blank.png");
                } else {
                    $('#catImage').attr("src", results["url"]);
                }
            },
            error: function(error) {
                console.error("Error fetching cat image:", error);
            }
    });
}));