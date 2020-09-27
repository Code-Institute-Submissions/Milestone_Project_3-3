$('document').ready(function (){
    
    emailjs.init("user_uMuGSSF3tAvdDaO6bEES3");
    
    let email_form = $('#contactForm');
    let btn = $('#contactForm div button');

    console.log($btn);

    email_form.submit(function(event){
        event.preventDefault();

        btn.text('Sending...');

        let service_id = 'service_h2c97rn';
        let template_id = 'recipe_pot_etemplate';

        emailjs.sendForm(service_id, template_id, this).then(
            function (){
                btn.text('SEND');
                alert('The email has been successfully sent!');
            }), function (err) {
                btn.text('SEND');
                alert("Sending email has failed!\r\n Please try again later.\r\n Response:\n" + JSON.stringify(err));
            }
    });
});
