//// [tests/cases/compiler/localAliasExportAssignment.ts] ////

//// [localAliasExportAssignment_0.ts]
var server: {
    (): any;
};

export = server;

//// [localAliasExportAssignment_1.ts]
///<reference path='localAliasExportAssignment_0.ts'/>
import connect = require('localAliasExportAssignment_0');

connect();




//// [localAliasExportAssignment_0.js]
var server;
module.exports = server;
//// [localAliasExportAssignment_1.js]
var connect = require('localAliasExportAssignment_0');
connect();
