//initial array of topics that the user can append to
var topics = ["dog", "cat", "hamster", "rabbit", "pig", "raccoon", "panda"];

//empties out the button container to create new buttons from the array
function createButtons() {
    $("#button-container").empty();
    for (i = 0; i < topics.length; i++) {
        var animalButton = $("<button>");
        animalButton.attr("data-animal", topics[i]);
        animalButton.attr("class", "animal-button")
        animalButton.text(topics[i]);
        $("#button-container").append(animalButton);
    }
}
createButtons();

//onclick function to initialize an AJAX GET call to the Giphy API. 
//
//it adds the image sources to data attributes to be used in the animation toggle function.
$(document).on('click', '.animal-button', function () {
    var animalName = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            $("#image-container").empty();
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var image = $("<img>");
                gifDiv.addClass("gif-div");
                image.addClass("gif-image");
                image.attr("src", results[i].images.fixed_height_still.url);
                image.attr("data-animated", results[i].images.fixed_height.url);
                image.attr("data-still", results[i].images.fixed_height_still.url);
                // data-state checks if the image is currently animated. false means that the image is still.
                image.attr("data-state", false);
                gifDiv.append(p);
                gifDiv.append(image);
                $("#image-container").prepend(gifDiv);
            }
        });
});

//keypress function to initialize search function when enter is pressed.
$(document).bind('keypress', function(event) {
    if(event.keyCode==13){
         $('#add-animal-button').trigger('click');
     }
});

//mouseclick function to add a new animal to the array and call createButtons().
$("#add-animal-button").on('click', function (event) {
    event.preventDefault();
    var newAnimal = $("#search-bar").val();
    topics.push(newAnimal);
    createButtons();
    $('#search-bar').val('');
});

//when an image is clicked, it checks 'data-state' to see whether the current image is animated or not.
//it toggles the source of the image based on state and toggles the 'data-state' attribute.
$(document).on('click', '.gif-image', function () {
    var newSource;
    var currentState = $(this).data("state");
    if (currentState == false)
    {
        newSource = $(this).data("animated");
        $(this).data("state", true);
    }
    if (currentState == true)
    {
        newSource = $(this).data("still");
        $(this).data("state", false);
    }
    $(this).attr("src", newSource);
});