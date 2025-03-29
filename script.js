const apiUrl = "https://jsonplaceholder.typicode.com/todos/1"

import axios from "axios";
import quotes from "inspirational-quotes";

console.log(quotes.getQuote())

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