
$(document).ready(function(){

    let videogames = ["Assassins Creed", "Super Mario Bros.", "Call of Duty","Mario Kart", "God Of War"];

    function vgButtons(arrayToUse, classToAdd, areaToAddTo){
        $(areaToAddTo).empty();

        for (let i = 0; i < arrayToUse.length; i++){
            let a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);

            $(areaToAddTo).append(a);
        }
    }

    $(document).on("click",".vg-button", function(){
        $("#images").empty();

        $(".vg-button").removeClass("active");
        $(this).addClass("active");

        let type = $(this).attr("data-type");
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=mzkbJko7cGJQ1CNXD8RDLIa4qUqAS7F5&limit=10";


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

                let still = results[i].images.fixed_height_still.url;

                let vgImages = $("<img>");
                vgImages.attr("src", still);
                vgImages.attr("data-still", still);
                vgImages.attr("data-animate", animated);
                vgImages.attr("data-state", "still");
                vgImages.addClass("vg-image");


                vgDiv.append(p);
                vgDiv.append(vgImages);

                $("#images").append(vgDiv);




            }
        });
    });


        $(document).on("click", ".vg-image", function(){
            let state = $(this).attr("data-state");

            if(state === "still"){
                $(this).attr("src",$(this).attr("data-animate"));
                $(this).attr("data-state","animate");
            }
            else{
                $(this).attr("src",$(this).attr("data-still"));
                $(this).attr("data-state","still");
            }
        });


        $("#add-vg").on("click", function(event){
            event.preventDefault();
            let newVg = $("input").eq(0).val();

            if(newVg.length > 2) {
                videogames.push(newVg);
            }

            vgButtons(videogames, "vg-button", "#vg-buttons")

        });

        vgButtons(videogames, "vg-button", "#vg-buttons")


});