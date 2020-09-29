$('document').ready(function (){
    
    emailjs.init("user_uMuGSSF3tAvdDaO6bEES3");
    
    let emailForm = $('#contactForm');
    let btn = $('#contactForm div button');

    emailForm.submit(function(event){
        event.preventDefault();

        btn.text('Sending...');

        let serviceId = 'service_h2c97rn';
        let templateId = 'recipe_pot_etemplate';

        emailjs.sendForm(serviceId, templateId, this).then(
            function (){
                btn.text('SEND');
                alert('The email has been successfully sent!');
            }), function (err) {
                btn.text('SEND');
                alert("Sending email has failed!\r\n Please try again later.\r\n Response:\n" + JSON.stringify(err));
            };
    });
});
