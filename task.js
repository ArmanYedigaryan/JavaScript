//Visualize execution context creation steps by step and explain the reason of output result

let a = 0;

for (let i = 0; i < 5; i++) {
   a++;
}
// because We haven`t console.log() command, isn`t printed

//Creation Phase:
// window: 'global object',
// this: window,
// i : uninitialized,
// a : uninitialized,

// Execution Phase 1:
// window: "global object"
// this: window
// i: 0
// a: 0

// Execution Phase 2:
// window: "global object"
// this: window
// i: 0
// a: 1

// Execution Phase 3:
// window: "global object"
// this: window
// i: 1
// a: 1

// Execution Phase 4:
// window: "global object"
// this: window
// i: 1
// a: 2

// Execution Phase 5:
// window: "global object"
// this: window
// i: 2
// a: 2

// In the end we have i: 5, a: 5


// Task 1.2
// Visualize execution context creation steps by step and explain the reason of output result


var b;

if (b > 2) {
    console.log(b);
}

b = 5;

// var b = "undefined"
// if(undefined > 2) false
// // b = 5

// Creation Phase 
// window: global object;
// this: window;
// b: undefined;

// Execution Phase1
// window: global object;
// this: window;
// b: 5;


// 2 Declaration Function & Function Expression
// Task 2.1
// Visualize execution context creation steps by step and explain the reason of output result


foo();

var foo;

function foo() {
    console.log( 1 ); // 1
}

// Creation Phase
// window: global object;
// this: window;
// foo: fn();

// Execution Phase
// window: global object;
// this: window;
// foo: fn();

// Creation Phase
// arguments: 0
// this: foo;

// Because function foo() is hoisted

// Task 2.1
// Visualize execution context creation steps by step and explain the reason of output result

foo();

var foo;

foo = function() {
    console.log( 2 );
};

// Creation Phase
// window: global object;
// this: window;
// foo: undefined;

// Execution Phase
// window: global object;
// this: window;
// foo: undefined;

// output is TypeError
// var foo = "undefined", we can`t call foo(),because foo is undefined

// 3. Arguments
// Task 3.1
// Visualize execution context creation steps by step and explain the reason of output result

const sayHello = function (a,b) {
    return  arguments
};

console.log(sayHello(3,4)); // [3, 4]

// Creation Phase
// window: global object;
// this: window;
// sayHello: unitialized;

// Execution Phase
// window: global object;
// this: sayHello;
// arguments: [0: 3, 1: 4, length:2]
// a: 3;
// b: 4

// Task 3.2
// Visualize execution context creation steps by step and explain the reason of output result

const sayHelloArrow = (a,b) => {
    return  arguments // Arrow function haven`t arguments
};

console.log(sayHelloArrow(6,7));


// Creation Phase
// window: global object;
// this: window;
// sayHelloArrow: unitialized;

// Execution Phase
// window: global object;
// this: window
// sayHelloArrow: fn();
// a: 6;
// b: 7;


// 4 Exercises
// Task 4.1
// Why output is 1 and NOT 2?

foo();

var foo; 

foo = function() { //because this is function expression, it isn`t hoisted
    console.log( 2 );
};

function foo() {
    console.log( 1 );
}


// Task 4.2
// What would be the output and why?
// How make b = 8 logged in console? Rewrite the code.

function foo() {
    console.log( this.b ); // this = obj, thats why b = 2
}
const b = 8;
const obj = {
    b: 2, // b:b, b: 8 here b = 8
    foo: foo
};

obj.foo();


Task 4.3
How invoke foo() function to log 42 in console. Explain your answer.
function foo() {
    console.log( this.a );
}

const obj2 = {
    a: 42,
    foo: foo
};

const obj1 = {
    a: 2,
    obj2: obj2
};
Task 4.4
Why it would throw the error message? How you can get the value 18 in the output?
function foo() {
    var a = 1;
    var b = 9;

    if (a >= 1) {
        let b = 2;

        while (b < 5) {
            let c = b * 2;
            b++;

        }
    }
    console.log( a + c + b );
}

foo();
