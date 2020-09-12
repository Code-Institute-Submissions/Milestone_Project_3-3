$('document').ready(function (){
    
    // Recipe Card Animation
    let $cards = $('div.row.cards');
    let $card = $('.card');
    let zindex = 10;

    $card.click(function(event){
        event.preventDefault();

        let isShowing = false;

        if($(this).hasClass('show')) {
            isShowing = true;
        }

        // Checks if card is already in view
        if ($cards.hasClass('showing')) {
            $card.removeClass('show');

            if(isShowing){
                // Resetting the grid css style back to normal
                $cards.removeClass('showing');
            } else {
                // Card is not showing apply the css to show it
                $(this).css({zIndex: zindex}).addClass('show');
            }
        } else {
            // No cards in view
            $cards.addClass('showing');
            $(this).css({zIndex: zindex}).addClass('show');
        };
    });

    let $add_recipe = $('#add_recipe');
    let $add_recipe_btn = $('#add_recipe_btn');

    $add_recipe.hover(function(){
        $add_recipe.removeClass('add-recipe-card--bg-color');
        
        $add_recipe_btn.addClass('add-recipe-btn-hover--color');
        $add_recipe.addClass('add-recipe-card-hover--bg-color');
        }, function(){
        $add_recipe.removeClass('add-recipe-card-hover--bg-color');
        $add_recipe_btn.removeClass('add-recipe-btn-hover--color');
        
        $add_recipe.addClass('add-recipe-card--bg-color');
    });

    $add_recipe.click(function(){
        window.location.href = "/add_recipe/";
    })

});