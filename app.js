
$(document).ready(function(){

    let videogames = ["Assassins Creed", "Super Mario Bros.", "Call of Duty"];

    function populateButtons(arrayToUse, classToAdd, areaToAddTo){
        $(areaToAddTo).empty();

        for (let i = 0; i < arrayToUse; i++){
            let a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }
    }

    $(document).on("click",".vg-buttons", function(){
        $("#images").empty();

        $(".food-button").removeClass("active");
        $(this).addClass("active");

        let type = $(this).attr("data-type");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=mzkbJko7cGJQ1CNXD8RDLIa4qUqAS7F5=10";


        $.ajax({
            url:queryURL,
            method: "GET"
        }).then(function(response) {
            let results = response.data;

            for (var i = 0; i < results.length; i++){
                let vgDiv = $("<div class=\"vg-item\">");


                let rating = results[i].rating;

                let p = $("<p>").text("Rating: " + rating);

                let animated = results[i].images.fixed_height.url;

                let still = results[i].images.fixed_height.url

                let vgImages = $("<img>");
                vgImages.attr("src", still);
                vgImages.attr("data-still", still);
                vgImages.attr("data-animate", animated);
                vgImages.attr("data-state", "still");
                vgImages.addClass("vg-image");


                foodDiv.append(a);
                foodDiv.append(vgImages);

                $("#images").append(vgDiv);




            }
        })
    })


        $(document).on("click")


})