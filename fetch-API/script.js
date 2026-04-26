/* fetch API:
    - The fetch API provides an interface for fetching (sending/receiving) resources.
    - It uses request and response objects to handle the communication between the client and server.
    - the fetch() method is used to fetch a resource from the server. It returns a promise that resolves to the response of the request.
    - The fetch API is built on top of promises, which allows for easier handling of asynchronous operations.
    - It provides a more powerful and flexible way to make network requests compared to the older XMLHttpRequest (XHR) method.
    - The fetch API supports various features such as CORS (Cross-Origin Resource Sharing), streaming responses, and more.
    - It is widely supported in modern browsers and is the recommended way to make network requests in JavaScript. 
  APIs (Application Programming Interfaces) work on requests and responses. A request is made to a server, and the server responds with data. The fetch API allows you to make these requests and handle the responses in a more efficient way.

  Syntax:
    let promise = fetch(url, [options])


    link of api ke agay endpoint lgaya jo documentation mai likha ho uske mutabik data ata hai e.g cat facts api mai url ke agay endpoint fact/ lagaya tou it will return cat facts. link browser mai likhi tou data show hoga. and that data is an array of objects - it is in the form of JSON (JavaScript Object Notation), which is a common format for data exchange. The fetch API allows you to easily parse this JSON data and use it in your JavaScript code.
    so u can directly send request from browser and see the data. but if u want to use that data in your code then u have to use fetch API to send request and get response and then parse the JSON data to use it in your code.

    */

    const url = "https://api.thecatapi.com/v1/images/search";

    let promise = fetch(url);
    console.log(promise); // it will return a promise object
    //promise ke response mai status ka attribute hota hai jisme status code hota hai. 200 means success, 404 means not found, 500 means server error, 400 means bad request, etc. so we can check the status code to see if the request was successful or not.
    //multiple ways to get result from promise object: 1) promise chaining (.then, .catch), 2) async/await
    // generally new info on page comes after reloading page but when we work with API calls internally , runtime pe sari info gets updated
    //whenever we use fetch method without giving it any options, it generates a particular type of request called GET request. GET request is used to retrieve data from the server/particular API. It is the default method for fetch API. so when we use fetch(url) it will send a GET request to the specified URL and return a promise that resolves to the response of the request.
    //Browser pe link dalte hain tou browser bhi GET request bhejta hai aur data show karta hai.
    //AJAX (Asynchronous JavaScript and XML)
      /* 
      In the past data was sent in XML format but now generally data is sent in JSON format. AJAX is a technique for making asynchronous requests to the server without reloading the page. It allows you to update parts of a web page without refreshing the entire page. The fetch API is a modern way to make AJAX requests and handle responses in JavaScript.
      JSON format js objects jesa format hota but its NOT a js object. it just looks like one.
      ajkal iss format mai data is transmitted
      AJAX kehta hain ajj bhi jo network requests hain, but we mean JSON instead of XML here usually now bcz most APIs use JSON format for data exchange. 
      */

    //JSON (JavaScript Object Notation)
    //json() method: returns a second promise that resolves to the result of parsing the response body text as JSON. It is used to parse the JSON data returned by the server and convert it into a JavaScript object that we can work with in our code. (Input is JSON, output is JavaScript object)
      /*
       This method is also asynchronous method.
       it returns a promise
       fetch() returned first promise
       json() returns second promise
       so response object pe json() method call krte hain to get usable data in js object format.
      */
    
    const catImg = document.querySelector(".cat-img");
    const btn = document.querySelector("#btn");

  
/*
    const getFacts = async () => {
        console.log("Fetching data...");
        let response = await fetch(url); // it will wait for the fetch request to complete and return the response object
        console.log(response); // it will return the response object (it has its own prototype too)
        console.log(response.status); // it will return the status code of the response

        let data = await response.json();
        console.log(data[0]); // it will return the data which is usable data now
        catImg.innerHTML = `<img src="${data[0].url}" alt="cat image">`; // it will display the cat image on the page
    };
*/
    function getFacts() {
        fetch(url)
        .then(response => {
            return response.json(); 
        })
        .then(data => {
            console.log(data);
            catImg.innerHTML = `<img src="${data[0].url}" alt="cat image">`;
        })
        .catch(error => {       
            console.log("Error fetching data:", error);
        });
    }
//both work but using async await is cleaner

 btn.addEventListener("click", getFacts);

 /*
  Requests & Responses:
    -HTTP Verbs: GET, POST, PUT, DELETE, etc. (GET is used to retrieve data, POST is used to send data to the server, PUT is used to update existing data, DELETE is used to delete data etc)
    Hypertext Transfer Protocol (HTTP) is the protocol used for communication between the client and server. It defines how messages are formatted and transmitted, and what actions web servers and browsers should take in response to various commands. 
    -Response Status Codes (read more on mdn)
    jab bhi koi request bhejtay ya response arha hota they have some header....headers mai extra info bhejte hain
    so whenever headers are discussed we basiclaly mean extra info with requests or responses.
    -HTTP response headers also contain details about the responses,such as content type, HTTP status code etc.
 */

    //Task: send a POST request via fetch API
