const path = require('path');
const url = require('url');
const fs = require('fs');
const remote = require('electron').remote;
const main = remote.require('./main.js');

var signIn = document.getElementById('signIn');
var email = document.getElementById('email');
var activation = document.getElementById('activationCode');
var password = document.getElementById('submit');

let pathName = path.join(__dirname, 'Files');

var obj = null;

//=============================================================================

signIn.addEventListener('click', function () {
    var window = remote.getCurrentWindow();
    let file = "./Files/Credentials.json";
    fs.readFile(file, 'utf-8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        obj = JSON.parse(data);
        if (email.value != obj.Email){
            alert("Incorrect Email ID. Please check and try again");
        }
        else if(Number(activation.value) != obj.ActivationCode){
            alert("Incorrect Activation Code. Please check and try again");
        }
        else {
            alert("Email ID and Activation Code succesfully verified");
            main.openWindow('login.html');
            window.close();
        }
    })
}, false)
document.body.appendChild(signIn);
//===============================================================================
// console.log(typeof(obj));
        // console.log(obj.Email);
        // console.log(email.value);
        // console.log(typeof(activation.value));
        // console.log(typeof(obj.ActivationCode));