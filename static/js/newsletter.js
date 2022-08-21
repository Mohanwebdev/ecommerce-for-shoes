$(document).ready(function() {
    $("#newsletter-submit").on("click", function(e) {
        e.preventDefault();

        let email = $("#newsletter-field").val();
        let errorMsg = $("#newsletter-error");

        errorMsg.hide();

        // Checks if user has input email
        if (email === "") {
            errorMsg.html("No email present!");
            errorMsg.css("color", "red");
            errorMsg.show();
        } else {
            let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let emailValid = emailRegex.test(email);

            // Checks if input email is in database
            if (!emailValid) {
                errorMsg.html("Value is not an email!");
                errorMsg.css("color", "red");
                errorMsg.show();
            } else {
                let jsonData = {
                    "email": email
                }

                let settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://sportsemporium-78d1.restdb.io/rest/newsletter",
                    "method": "POST",
                    "headers": {
                        "content-type": "application/json",
                        "x-apikey": "6215fc0634fd621565858927",
                        "cache-control": "no-cache"
                    },
                    "processData": false,
                    "data": JSON.stringify(jsonData)
                }

                $.ajax(settings).done(function() {
                    $("#newsletter-field").val("");
                });
            }
        }


    });

});


function newsletter() {
    alert("You have signed up for our monthly newsletter!");
}