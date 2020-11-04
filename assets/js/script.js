
var currentDay = (moment().format("MMMM Do YYYY"))

$(".dateTime").text("Today's date is " + currentDay)

console.log(currentDay)
console.log(moment())

$("#redoButton").on("click", function () {
    var unsplashAPI = "https://source.unsplash.com/random/798x427"
    fetch(unsplashAPI)
        .then(function (response) {
            return response;
        })
        .then(function (data) {
            console.log(data);
            $("img").attr("src", data.url)           
        })
    
})

$(document).ready(function () {
    
    var unsplashAPI = "https://source.unsplash.com/random/798x427"
    fetch(unsplashAPI)
        .then(function (response) {
            return response;
        })
        .then(function (data) {
            console.log(data);
            $("img").attr("src", data.url)           
        })
})

$("#redoButton").on("click", function () {
    var quotesAPI = "http://quotes.stormconsultancy.co.uk/random.json"
    fetch(quotesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $("#quoteText").text(data.quote)           
        })
})
