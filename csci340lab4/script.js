
$(document).ready(function() {
    $('#duckClicker').click(function() {
        $.ajax({
            url: 'https://dog.ceo/api/breeds/image/random',
            dataType: 'json',
            success: function(results) {
                console.log(results["message"]);
                if (results["message"].endsWith(".mp4")) {
                    $('#duckImage').attr("src", "images/blank.png");
                } else {
                    $('#duckImage').attr("src", results["message"]);
                }
            },
            error: function(xhr,status,error) {
                console.log(error);
            }
    });
});
});