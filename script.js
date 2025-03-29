const apiUrl = "https://jsonplaceholder.typicode.com/todos/1"

import axios from "axios";

// fetch(apiUrl)
// .then(res => res.json())
// .then(console.log);


axios.get(apiUrl)
.then(res => {
    console.log(res)
});

function sayHello() {
    console.log("Hello World!!")
};

setTimeout(() => {
    sayHello()
}, 2000);