
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

