$("form[name=signup_form]").submit(function(event) {
    let $form = $(this);
    let $error = $(".error")
    let $error_p = $(".error p")
    let data = $form.serialize();

    $.ajax({
        url: "/user/signup",
        type: "POST",
        data: data,
        dataType: "json",
        success:    function(resp) {
            console.log(resp);
        },
        error:  function(resp) {
            console.log(resp)
            $error_p.text(resp.responseJSON.error)
            $error.removeClass("d-none")
        }
    });
    //Preventing Default onSubmit Action
    event.preventDefault();
});