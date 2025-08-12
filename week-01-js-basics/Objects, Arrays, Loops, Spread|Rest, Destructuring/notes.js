//OBJECTS
    const user = {
        name: "John",
        email: "john@gmail.com",
        age: 30
    }

//SPREAD OPERATOR
    //Spread = expand an array/object into individual elements
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5, 6];
    console.log(arr2); // [1, 2, 3, 4, 5, 6]

//REST OPERATOR
    //Collects all remaining elements into an array/object
    let [firstNumber, secondNumber, ...restNumbers] = [1, 2, 3, 4, 5, 6];
    console.log(restNumbers); //3, 4, 5, 6

    const { role, ...userDetails } =  {name: "Bob", role: "admin", age: 30 }
    // role = "admin", userDetails = { name: "Bob", age: 30 }

//ARRAY METHODS
    //.map() -> transforms each element
        let nums = [1, 2, 3, 4, 5, 6];
        nums = nums.map(n=>n*2)
        console.log(nums);
    //.filter() -> keeps only matching elements
        nums.filter(n=>n%2===0)
    //.reduce() -> reduces array to a single value
        nums = [1, 2, 3, 4];
        const sum = nums.reduce((acc, val) => acc + val, 0);
        console.log(sum); // 10
//LOOPS
    //There are 2 methods of looping through an array:

    //1. forEach method — for simple element iteration without needing to break or return.
        let arr = [1, 2, 3, 4, 5, 6];
        arr.forEach(item => {
            console.log(item);
        });
    //2. for...of loop — when you want a simple, clean syntax and possibly use break or continue.
        for (const item of arr) {
            console.log(item);
        }


