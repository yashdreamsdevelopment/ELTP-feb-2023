// and &&, or ||, not !

// and &&
true  && true;  //true
false && true;  //false
true  && false; //false
false && false; // false

// OR ||
true  || true;  //true
false || true;  //true
true  || false; //true
false || false; // false

// NOT !
!false // true
!true  // false

// FALSY VALUES
// 0, "", null, undefined, NaN, false
0 && true; // false && true // false

// all other values are truthy