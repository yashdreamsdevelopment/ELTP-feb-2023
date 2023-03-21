// compare LHS and RHS and evaluate to boolean

// ==, !=, <, <=, >, >=
// ===, !== --> ALWAYS USE THESE

// ==
4 == 4; // t
3 == 4; // f
4 == 5; // f
4 == true; // f
4 == 'a'; // f
4 == undefined; // f
4 == null; // f
4 == '4'; // t

// !=
4 != 4; // f
3 != 4; // t
4 != 5; // t
4 != true; // t
4 != 'a'; // t
4 != undefined; // t
4 != null; // t
4 != '4'; // f

// <
4 < 4; // f
3 < 4; // t
4 < 5; // t
4 < true; // f
true < 4; // t
'a' < true; // f
true < 'a'; // f
4 < 'a'; // f
4 < undefined; // f
4 < null; // f
4 < '4'; // f
'4' < 4; // f
'4' < 5; // t

// <=
4 <= 4; // t
3 <= 4; // t
4 <= 5; // t
4 <= true; // f
true <= 4; // t
'a' <= true; // f
true <= 'a'; // f
4 <= 'a'; // f
4 <= undefined; // f
4 <= null; // f
4 <= '4'; // t
'4' <= 4; // t
'4' <= 5; // t

// >
4 > 4; // f
3 > 4; // f
4 > 5; // f
4 > true; // t
true > 4; // f
'a' > true; // f
true > 'a'; // f
4 > 'a'; // f
4 > undefined; // f
4 > null; // f
4 > '4'; // f
'4' > 4; // f
'4' > 5; // f

// >=
4 >= 4; // t
3 >= 4; // f
4 >= 5; // f
4 >= true; // t
true >= 4; // f
'a' >= true; // f
true >= 'a'; // f
4 >= 'a'; // f
4 >= undefined; // f
4 >= null; // f
4 >= '4'; // t
'4' >= 4; // t
'4' >= 5; // f


// ===
4 === '4'; // f
4 !== '4'; // t




15 == 16; // f
true === false; // f
'abcd' > 'abce'; // f
'abce' > 'abcd'; // t
14 != 15; // t
null === true; // f
null === false; // f
0 < '1'; // t
1 == []; // f
{ a: 1 } == []; // f

// COMMON PITFALLS
[] == false; // t
[] == []; // f
[] === []; // f
{} == {}; // f
{} === {}; // f