$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Hadi ama, bir ismin var, değil mi?",
                    minlength: "Adınız en az 2 karakterden oluşmalı."
                },
                subject: {
                    required: "Hadi ama, bir konun var, değil mi?",
                    minlength: "Konu en az 4 karakterden oluşmalı."
                },
                number: {
                    required: "Hadi ama, bir numaran var, değil mi?",
                    minlength: "Numaranız en az 5 karakterden oluşmalı."
                },
                email: {
                    required: "E-posta olmadan mesaj da olmaz."
                },
                message: {
                    required: "Hmm...evet, bu formu göndermek için bir şeyler yazmalısınız.",
                    minlength: "Hepsi bu kadar mı? Gerçekten mi?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: handleSubmit(),
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)

                     // Formu gönderme işlemi için fonksiyon
                     function handleSubmit(event) {
                        event.preventDefault(); // Formu engelle
                        
                        let name = document.getElementById('name').value;
                        let email = document.getElementById('email').value;
                        let subject = document.getElementById('subject').value;
                        let message = document.getElementById('message').value;
                        
                        // Mailto URL'sini oluşturma
                        let mailtoLink = `mailto:iletisim@birhaber.com?subject=${encodeURIComponent(subject)}&body=Ad: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMesaj:%0A${encodeURIComponent(message)}`;
                        
                        // Mailto bağlantısını açma
                        window.location.href = mailtoLink;
                    }
})