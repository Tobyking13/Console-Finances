# Toby King Challenge 4: Console Finances

## Description

I have created a webpage that will console.log information about the company's finances that is logged within a Javascript array. The information gathered was: the total number of months, net profit, an average change of profit and loss for each month, the greatest monthly increase in profits and the greatest monthly decrease in profits. 

Firstly I wrote pseudocode to figure out all of the steps in how to complete this program and achieve all the results it needed.

All of this information has been gathered using Javascript. To get the total number of months, I called the array.length property. This returns a number value. In this case, it was 86. To find the net profit I set up a variable = to 0. Then I made a for loop that added each numerical value attached to the array to the variable = to 0. This gave me a sum of 38,382,578. To find the average change month to month I simply created a for loop that would store a new array for each numerical value - the next numerical value in the array & divided that by the totalMonths - 1. All this info was pushed to two new arrays. 1 array had the original info + the amount of change per month and another array simply stored the amount of change per month.

The last two pieces of information were to get the month and number of the greatest profit and greatest decrease in profit. This was achieved by using the array of data containing all the monthly changes in profit. Then I called two methods on that array to find the maximum and minimum values. These were each stored in a new variable. I then created a for loop to go through the other array containing the months, number and profit values. Within this loop was an if statement saying if the index matches the max value then print that value to the console. The same was done to determine the month and value of the greatest profit loss. 

Lastly, I used Javascript to print each console.log to the DOM. I first made an h1 that sent the values of the title to append it to the body of the HTML. Then all the console logs were appended to the body by making h2 HTML elements of each log. This was finished off by adding some basic CSS styling to make the program look prettier.

This has been a great assignment and I have learned a lot. I was getting hung up on trying to make the code work by trying complicated things when you take a step back you can achieve the perfect result by making the Javascript simple. Doing some basic DOM manipulation was fun as well and a good insight into what is possible with Javascript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

https://tobyking13.github.io/Toby-King-Challenge-4-Console-Finances/

## Usage

![Toby King Portfolio](./images/finance-console-screenshot.png "Toby King Portfolio" )
Screenshot of the webpage live on Github pages.

## Credits

N/A

## License

N/A

## Badges

N/A

## Features

* Prints to the console each piece of financial information.
* Adds the same information to the HTML body by manipulating the DOM with Javascript.
* Basic CSS styles added to make the program look perttier.

## How to Contribute

N/A

## Tests

N/A