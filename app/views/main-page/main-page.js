"use strict";
var frame_1 = require('ui/frame');
var data_1 = require('../../shared/data');
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = {
        presentations: data_1.default
    };
}
exports.navigatingTo = navigatingTo;
function details(args) {
    console.log(args.object.id);
    frame_1.topmost().navigate({
        moduleName: 'views/presentation-details/presentation-details',
        context: data_1.default.filter(function (el) { return el.id === args.object.id; })[0]
    });
}
exports.details = details;
//# sourceMappingURL=main-page.js.map