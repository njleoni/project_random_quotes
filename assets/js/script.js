// Declare variables in global memory
// Moment.JS call and formatting
var currentDay = (moment().format("MMMM Do YYYY"))
// Empty array to store saved quotes
var quotes = [];
// Empty variable to store quote
var quote = "";

// Append todays date from Moment.JS to html
$(".dateTime").text("Today's date is " + currentDay)

// console.log(currentDay)
// console.log(moment())


// Event listener for redo button to grab a new randomly generated image and append it
$("#redoButton").on("click", function () {
    // API call url
    var unsplashAPI = "https://source.unsplash.com/collection/89063260/798x427"
    fetch(unsplashAPI)
        .then(function (response) {
            return response;
        })
        .then(function (data) {
            // console.log(data);
            $("#imgInput").attr("src", data.url)           
        })
    
})

// Call api for random tech photo on load
$(document).ready(function () {
    
    var unsplashAPI = "https://source.unsplash.com/collection/89063260/798x427"
    fetch(unsplashAPI)
        .then(function (response) {
            return response;
        })
        .then(function (data) {
            // console.log(data);
            $("#imgInput").attr("src", data.url)           
        })
})

// Event listener for redo button to grab a new randomly generated quote and append it
$("#redoButton").on("click", function () {
    // API call url
    var quotesAPI = "https://programming-quotes-api.herokuapp.com/quotes/random"

    fetch(quotesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            $("#quoteText").text(data.en) 
            quote = data.en;
            // console.log("test" + en)
        })
})

// Once the page is ready, call api to randomly generate quote and append it
$(document).ready(function () {

    var quotesAPI = "https://programming-quotes-api.herokuapp.com/quotes/random"

    fetch(quotesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            $("#quoteText").text(data.en)
            quote = data.en;
        })
})

// Event listener for saving quotes to local storage
$("#saveButton").on("click", function () {
    // Push value saved in quote to the quotes array
    quotes.push(quote)
    // Save quotes array to local storage
    localStorage.setItem("Fav Quotes:", JSON.stringify(quotes))
    // Call the newQuote function and pass it the value stored in quote to save and append it to the quotes list
    newQuote(quote);
})

// If there are any quotes saved in local storage, call the showQuotes function
if (localStorage.getItem("Fav Quotes:") !== null) {
    quotes = JSON.parse(localStorage.getItem("Fav Quotes:"));
    localStorage.setItem("Fav Quotes:", JSON.stringify(quotes))
    showQuotes();
}

// Function to create a new div in the quotes list, assign the argument that the function is passed to the innerText, and assign it an ID, then append the changes.
function newQuote(x) {
    var listItem = document.createElement("div");
    
        listItem.innerText=x
        listItem.setAttribute("id", "listItem")
    
        $("#quoteList").append(listItem);
        
}


// Function to show quotes on the page
function showQuotes() {
    // Grab data from local Storage, and assign it the quoteList variable
    var quoteList = JSON.parse(localStorage.getItem(localStorage.key("Fav Quotes:")))

    // For every item in the quoteList variable, create a new DataView, assign the innerText, give it an ID, and append it
    for (i = 0; i < quoteList.length; i++) {
        var listItem = document.createElement("div");
    
        listItem.innerText=quoteList[i]
        listItem.setAttribute("id", "listItem")
    
        
    
        $("#quoteList").append(listItem);
        // console.log("List: " + quoteList[i])
    }

}
