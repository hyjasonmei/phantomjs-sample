var page = require('webpage').create();
var url = 'http://localhost:8080/';
page.open(url, function (status) {
    setTimeout(function () {
        console.log("Status: " + status);
        if (status === "success") {
            page.render('example.png');
        }
        phantom.exit();
    }, 2000);

});