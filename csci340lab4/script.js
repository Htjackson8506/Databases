
$(document).ready(function() {
    $('#dogClicker').click(function() {
        $.ajax({
            url: 'https://dog.ceo/api/breeds/image/random',
            dataType: 'json',
            success: function(results) {
                console.log(results["message"]);
                $('#dogImage').attr("src", results["message"])
            },
            error: function(xhr,status,error) {
                console.log(error);
            }
    });
});
    $('#catClicker').click(function(){
        $.ajax({
            url: "https://shibe.online/api/cats",
            dataType: 'json',
            success: function(results) {
                console.log(results[0]);
                $('#catImage').attr("src", results[0])
            }
        })
    })
});