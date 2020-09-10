$('document').ready(function (){
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
});