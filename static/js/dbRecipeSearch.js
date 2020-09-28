$("document").ready(function(){
    const srcButton = $("#search-btn");
    const srcInput = $("#search-input");
    let srcForm = $("form[name=search-form]");

    srcForm.submit(function(event){
        let data = srcForm.serialize();
        
        $.ajax({
            url: "/recipes/search",
            type: "POST",
            data: data,
            dataType: "json",
            success: function (resp) {
                console.log(resp);
            },
            error: function (resp) {
                console.log(resp);
            }
        });

        event.preventDefault();
    });

});