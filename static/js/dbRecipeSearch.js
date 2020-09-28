$("document").ready(function(){
    let srcForm = $("form[name=search-form]");
    let recipesRow = $("#recipe-display-row");

    srcForm.submit(function(event){
        let data = srcForm.serialize();
        
        $.ajax({
            url: "/recipes/search",
            type: "POST",
            data: data,
            dataType: "json",
            success: function (resp) {
                console.log(resp);
                let recipeCount = 1;
                recipesRow.empty();
                for (i = 0; i < resp.length; i++){
                    let cardTemplateCopy = $("#card-template").clone().contents();

                    cardTemplateCopy.find("img").attr("src", resp[i].img_url);
                    cardTemplateCopy.find("#card-heading").text(resp[i].recipe_name);
                    cardTemplateCopy.find("#collapse-btn").attr("href", "#collapse" + recipeCount);
                    cardTemplateCopy.find(".collapse").attr("id", "collapse" + recipeCount);
                    cardTemplateCopy.find("p").text(resp[i].step_description[1]);
                    cardTemplateCopy.find("#read-more-btn").attr("href", "/view_recipe/" + resp[i]._id["$oid"])

                    recipesRow.append(cardTemplateCopy);
                    recipeCount++;
                };
                
            },
            error: function (resp) {
                console.log(resp);
            }
        });

        event.preventDefault();
    });

});