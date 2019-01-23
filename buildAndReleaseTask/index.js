var Skytap = require('node-skytap');

var myUsername = process.env["INPUT_USERNAME"];
var myPassword = process.env["INPUT_PASSWORD"];
var myTemplate = process.env["INPUT_TEMPLATE"];
var myEnvironment = process.env["INPUT_ENVIRONMENT"];

var passwordCredentials = {
    username: myUsername,
    password: myPassword
}

Skytap.token(passwordCredentials)
.then(function(token) {
    var tokenCredentials = {
        username: myUsername,
        token: token.api_token
    }

    var skytap = Skytap.init(tokenCredentials);

    skytap.environments.create({
        template_id: myTemplate,
        name: myEnvironment
    })
    .then(function(environment) {
        console.log(state);
    })
    .fail(function(err) {
        console.log(err);
    });
})
.fail(function(err) {
    console.log(err);
})
