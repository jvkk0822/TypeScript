var m4 = require("m4");
exports.x4 = m4.x;
exports.d4 = m4.d;
exports.f4 = m4.foo();
(function (m1) {
    m1.x2 = m4.x;
    m1.d2 = m4.d;
    m1.f2 = m4.foo();
    var x3 = m4.x;
    var d3 = m4.d;
    var f3 = m4.foo();
})(exports.m1 || (exports.m1 = {}));
var m1 = exports.m1;
var multiImport_m4 = require("m4");
exports.useMultiImport_m4_x4 = multiImport_m4.x;
exports.useMultiImport_m4_d4 = multiImport_m4.d;
exports.useMultiImport_m4_f4 = multiImport_m4.foo();
