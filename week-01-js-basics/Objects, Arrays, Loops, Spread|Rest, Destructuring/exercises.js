//Part 1 — Warm-up
    //1
        //   Create an object user with keys id, name, email.
        //   Add a new property role.
        //   Loop through it with for...in.

        const user = {
            id: 0,
            name: "John",
            email: "john@gmail.com"
        }
        user.role = "user";
        for (const key in user){
            console.log(`${key}: ${user[key]}`);
        }
    //2
        //  Create an array of numbers.
        //  Double each number with .map().
        //  Filter numbers greater than 5.
        //  Sum them with .reduce().
        let nums = [1,2,3,4,5]
        nums = nums.map(n=> n*2)
        nums = nums.filter(n => n > 5);
        nums = nums.reduce((acc, val) => acc + val, 0);
    //3
    //  Use destructuring to:
    //  Extract name from user.
    //  Extract first element of an array and rest in another array.
    const {name} = user;
    console.log(name)
    const [firstElement, ...restElements] = [1, 2, 3, 4, 5, 6];
    console.log(firstElement)
    console.log(restElements)
//Part 2 — Laravel-Like Data Structures
//Imagine we have Laravel-style User and Post data:
const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "editor" },
    { id: 3, name: "Charlie", role: "subscriber" }
];

const posts = [
    { id: 101, title: "Welcome Post", authorId: 1 },
    { id: 102, title: "Second Post", authorId: 2 },
    { id: 103, title: "Admin Tips", authorId: 1 }
];

//1. Find all posts by Alice
//Use .filter() to find posts with authorId matching Alice’s id.
const alice = users.find(user=> user.name === "Alice");
const aliceId = alice.id
let postsByAlice = posts.filter(post => post.authorId === aliceId)
console.log(postsByAlice)

//2. Attach author names to posts (like Eloquent relationships)
//Use .map() to create a new array of posts with authorName included.
postsByAlice = postsByAlice.map(post => {
    return{
        ...post,
        authorName: alice.name}
})
console.log(postsByAlice)

//3. Count posts per user
//Use .reduce() to return an object where keys are user names and values are number of posts.
const postCount = posts.reduce((acc, post) => {
    const authorName = users.find(user=>user.id === post.authorId).name
    if (acc[authorName]){
        acc[authorName]++;
    }
    else{
        acc[authorName] = 1
    }
    return acc
},{})
console.log(postCount)
//4. Clone and update
//Use spread operator to create a new users array where all role values are uppercase.
const updatedUsers = users.map(user => ({
    ...user,
        role: user.role.toUpperCase()
}))
console.log(updatedUsers)