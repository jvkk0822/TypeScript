//// [assignmentCompatWithNumericIndexer3.ts]
// Derived type indexer must be subtype of base type indexer

interface Base { foo: string; }
interface Derived extends Base { bar: string; }
interface Derived2 extends Derived { baz: string; }

class A {
    [x: number]: Derived;
}

var a: A;
var b: { [x: number]: Base; };

a = b; // error
b = a; // ok

class B2 extends A {
    [x: number]: Derived2; // ok
}

var b2: { [x: number]: Derived2; };
a = b2; // ok
b2 = a; // error

module Generics {
    class A<T extends Derived> {
        [x: number]: T;
    }

    function foo<T extends Derived>() {
        var a: A<T>;
        var b: { [x: number]: Derived; };
        a = b; // error
        b = a; // ok

        var b2: { [x: number]: T; };
        a = b2; // ok
        b2 = a; // ok
    }
}

//// [assignmentCompatWithNumericIndexer3.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var A = (function () {
    function A() {
    }
    return A;
})();
var a;
var b;
a = b;
b = a;
var B2 = (function (_super) {
    __extends(B2, _super);
    function B2() {
        _super.apply(this, arguments);
    }
    return B2;
})(A);
var b2;
a = b2;
b2 = a;
var Generics;
(function (Generics) {
    var A = (function () {
        function A() {
        }
        return A;
    })();
    function foo() {
        var a;
        var b;
        a = b;
        b = a;
        var b2;
        a = b2;
        b2 = a;
    }
})(Generics || (Generics = {}));
