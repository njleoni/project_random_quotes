# Digital quote of the day calendar

This application offers a digital quote of the day calendar for developers and other tech professionals. The application is interactive, allowing users to randomly generate quotes and photos and save their favorite quotes.

Using calls to three APIs, the application displays the day's date, a randomly generated photo and a randomly generated quote about computer programming and technology.

## To use the app

Users can navigate to https://njleoni.github.io/project_random_quotes/ to load the app. Once loaded, the page functions much like a traditional quote-of-the-day calendar. However, unlike a static calendar, users can click the "Redo" button to see a new photo and quote for the day or they can click the "Save" button to save the quote into a list of favorite quotes, which persists in local storage.

## The APIs

The app uses a call to moment.js to retrieve the day's date and a call to an API maintained by Storm Consultancy (http://quotes.stormconsultancy.co.uk/api) to retrieve the quote, and a call to an Unsplash API (https://unsplash.com) for the photo.

The Unsplash and Storm Consultancy APIs are specifically designed to generate tech-themed quotes and photos that work seamlessly with sosphisiticated design that evokes tech themes, making the app great for developers and other tech professionals.
