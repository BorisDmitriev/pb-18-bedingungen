//1
const int1 = 12;
const int2 = 51;

console.log( (int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) );

//2
int3 = 74;
console.log( (int1 >= 50 && int1 <= 99) ||
             (int2 >= 50 && int2 <= 99) ||
             (int3 >= 50 && int3 <= 99)
             );

//3
const a = 10;
const b = 40;
const c = 70;
let max;
if( a>b ) max = a;
else max = b;
if( max<c ) max = c;
console.log(max);

if( int1>int2 ) max = int1;
else max2 = int2;
if( max<int3 ) max = int3;
console.log(max);

// console.log( Math.max( a,b,c) );

//4
const str = "thon";
if( str.startsWith("Py") ) console.log(str);
else console.log( "Py"+str );

//5
const summe = int1 + int2;
if( summe >=50 && summe <=80 ) console.log(65);
else console.log(80);

//6
const int4 = 12;
const int5 = 4;
if( int4+int5 === 8 || int4-int5 === 8 ) console.log(true);
else console.log(false);

//7
if( int4 === 15 || int5 ===15 || int4+int5 === 15 ) onsole.log(true);
else console.log(false);

//8
if( int4%7===0 || int4%11===0 || int5%7===0 || int5%11===0 ) console.log(true);
else console.log(false);

//9
if( int4===int5 ) console.log( (int4+int5)*3 );
else console.log( int4+int5 );

//10
if( int5>19 ) console.log( (int5-19)*2 );
else console.log( (int5-19) );

//11
const firstName = "John";
const age = 34;
if( age < 13 ) console.log( `${firstName} is a child` );
if( age >= 13 && age < 20) console.log( `${firstName} is a teenager` );
if( age >= 20 && age < 30) console.log( `${firstName} is a young adult` );
else console.log( `${firstName} is an adult` );
