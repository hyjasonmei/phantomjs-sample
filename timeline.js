var page = require('webpage').create(), system = require('system'), address, output, size;

if (system.args.length < 3 || system.args.length > 5) {
    phantom.exit(1);
} else {
    address = system.args[1];
    output = system.args[2];
    //定義寬高
    page.viewportSize = {
        width: 1920,
        height: 1000
    };
    page.open(address, function (status) {
        var bb = page.evaluate(function () {
            return document.getElementById('container').getBoundingClientRect();
        });
        console.log(bb.top, bb.left, bb.width, bb.height);
        page.clipRect = {
            top: bb.top,
            left: bb.left,
            width: bb.width,
            height: bb.height
        };

        if (status === 'success') {
            console.log('success');
            page.render(output);
            page.close();
            console.log('done...');
            phantom.exit();
        } else {
            console.log('error');
        }
    });
}