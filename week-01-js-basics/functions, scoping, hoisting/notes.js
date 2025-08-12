//FUNCTIONS
    //Regular function syntax
    function sum(a,b){
        return a + b
    }
    console.log(sum(1,5))

    //Arrow functions - a concise way to write simple function expressions
    //Actually the same as anonymous function in Python

    const sub = (a, b) => a - b;
    console.log(sub(4,2))
    const hello = (name)=> `Hello, ${name}!`
    console.log(hello('Davyd'))
//HOISTING
    //Var and functions are moved automatically on the very top of the file
    // Snippet 1
        var x = 10;
        function foo() {
            console.log(x);
            var x = 20;
        }
        foo();
        //It returns undefined, because 'x' is hoisted to the top of the function scope
        //but the initialization (= 20) is not hoisted
    // Snippet 2
        let y = 10;
        function bar() {
            console.log(y);
            let y = 20;
        }
        bar();
        //It returns ReferenceError because let and const are never hoisted and when you try to output 'y',
        //it's not initialized yet
//SCOPING
    //#1
        var a = 1;

        function test() {
            console.log(a); // undefined, 'a' is hoisted but the declaration is not
            var a = 2;
            console.log(a); // prints 2
        }

        test();
        console.log(a); // prints 1 because 'a' is a local variable
    //#2
        let num = 5;

        function outerFunc() {
            let num = 10;

            function innerFunc() {
                num++;
                console.log(num);
            }

            innerFunc(); // 11
            console.log(num)
        }

        outerFunc(); // 11 because 'num' was incremented
        console.log(num); // 5

