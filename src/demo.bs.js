// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var SemiringExtras = require("./SemiringExtras.bs.js");

function add(prim, prim$1) {
  return prim + prim$1 | 0;
}

var mul = Caml_int32.imul;

var IntSemiring = {
  add: add,
  mul: mul,
  zero: 0,
  one: 1
};

var include = SemiringExtras.Make(IntSemiring);

var increment = include.increment;

var v = Curry._1(increment, 3);

exports.IntSemiring = IntSemiring;
exports.increment = increment;
exports.v = v;
/* include Not a pure module */