//// [amdDependencyComment2.ts]
///<amd-dependency path='bar'/>

import m1 = require("m2")
m1.f();

//// [amdDependencyComment2.js]
define(["require", "exports", "m2", "bar"], function (require, exports, m1) {
    m1.f();
});
