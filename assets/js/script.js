// Declare variables in global memory
var currentDay = (moment().format("MMMM Do YYYY"))
var quotes = [];
var quote = "";

// append the day's date onto the page
$(".dateTime").text("Today's date is " + currentDay)

// console.log(currentDay)
// console.log(moment())

// event listener for 'redo' button for photos
$("#redoButton").on("click", function () {
    var unsplashAPI = "https://source.unsplash.com/collection/89063260/798x427"
    fetch(unsplashAPI)
        .then(function (response) {
            return response;
        })
        .then(function (data) {
            console.log(data);
            $("img").attr("src", data.url)           
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
            console.log(data);
            $("img").attr("src", data.url)           
        })
})
// event listener for 'redo' button for quotes
$("#redoButton").on("click", function () {
    var quotesAPI = "https://programming-quotes-api.herokuapp.com/quotes/random"
    fetch(quotesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            $("#quoteText").text(data.en) 
            quote = data.en;
            console.log("test" + en)
        })
})

// Call api for random quote on load
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
    quotes.push(quote)
    localStorage.setItem("Fav Quotes:", JSON.stringify(quotes))
    newQuote(quote);
})

if (localStorage.getItem("Fav Quotes:") !== null) {
    quotes = JSON.parse(localStorage.getItem("Fav Quotes:"));
    localStorage.setItem("Fav Quotes:", JSON.stringify(quotes))
    showQuotes();
}
//  Append saved quotes to the page 
function newQuote(x) {
    var listItem = document.createElement("div");
    
        listItem.innerText=x
        listItem.setAttribute("id", "listItem")
    
        $("#quoteList").append(listItem);
        
}

// Function to show quotes on the page
function showQuotes() {
    var quoteList = JSON.parse(localStorage.getItem(localStorage.key("Fav Quotes:")))

    for (i = 0; i < quoteList.length; i++) {
        var listItem = document.createElement("div");
    
        listItem.innerText=quoteList[i]
        listItem.setAttribute("id", "listItem")
    
        
    
        $("#quoteList").append(listItem);
        console.log("List: " + quoteList[i])
    }

}
