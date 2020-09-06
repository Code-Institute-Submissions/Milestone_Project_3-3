$("form[name=signup_form]").submit(function(event) {
    let $form = $(this);
    let $error = $(".error");
    let $error_p = $(".error p");
    let data = $form.serialize();

    $.ajax({
        url: "/user/signup",
        type: "POST",
        data: data,
        dataType: "json",
        success:    function(resp) {
            // Getting the Current Page URL and setting it to "/profile_page/"
            window.location.href = "/profile_page/";
        },
        error:  function(resp) {
            console.log(resp);
            $error_p.text(resp.responseJSON.error);
            $error.removeClass("d-none");
        }
    });
    //Preventing Default onSubmit Action
    event.preventDefault();
});


$("form[name=login_form]").submit(function(event) {
    let $form = $(this);
    let $error = $("form[name=login_form] .error");
    let $error_p = $("form[name=login_form] .error p");
    let data = $form.serialize();

    $.ajax({
        url: "/user/login",
        type: "POST",
        data: data,
        dataType: "json",
        success:    function(resp) {
            // Getting the Current Page URL and setting it to "/profile_page/"
            window.location.href = "/profile_page/";
        },
        error:  function(resp) {
            console.log(resp);
            $error_p.text(resp.responseJSON.error);
            $error.removeClass("d-none");
        }
    });
    //Preventing Default onSubmit Action
    event.preventDefault();
});