"use strict";
var page;
function navigatedTo(args) {
    page.bindingContext = args.object.navigationContext;
}
exports.navigatedTo = navigatedTo;
function loaded(args) {
    page = args.object;
}
exports.loaded = loaded;
//# sourceMappingURL=presentation-details.js.map