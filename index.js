var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// Format values to add commas and dollar sign
var dollars = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD', 
    maximumFractionDigits: 0,
  });

var value = 0;
// Title

// console.log
console.log("Financial Analysis");
console.log("----------------------------")

// DOM
var title = document.createElement('h1');
var titleLine = document.createElement('h1')

title.innerHTML = "Financial Analysis";
titleLine.innerHTML = ("----------------------------")
document.body.appendChild(title);
document.body.appendChild(titleLine);

// The total number of months included in the dataset.

// console.log
var totalMonths = (finances.length);
console.log("Total Months: ", totalMonths);

// DOM
var totalMonthsDOM = document.createElement('h2')

totalMonthsDOM.innerHTML = ("Total Months: " + totalMonths);
document.body.appendChild(totalMonthsDOM);

// The net total amount of Profit/Losses over the entire period.

var netTotal = 0;

for (i = 0; i < finances.length; i++) {
    netTotal += finances[i][1];
};

value = netTotal

// console.log
console.log("Total ", dollars.format(value));

// DOM
var netTotalDOM = document.createElement('h2');

netTotalDOM.innerHTML = ("Total " + dollars.format(value));
document.body.appendChild(netTotalDOM);

// The average of the changes in Profit/Losses over the entire period.

var profitAndLossArr = [];
var monthlyDifference = [];
var averageChange = 0;

for(i=0;i< finances.length - 1;i++) {
    var changePerMonth = finances[i + 1][1] - finances[i][1];
    profitAndLossArr.push([finances[i][0], changePerMonth]);
    monthlyDifference.push(changePerMonth);
};

for (i = 0; i < profitAndLossArr.length; i++) {
    averageChange += profitAndLossArr[i][1];
};

value = (averageChange / (totalMonths - 1))
// console.log
console.log("Average Change ", dollars.format(value));

// DOM
var averageChangeDOM = document.createElement('h2');

averageChangeDOM.innerHTML = ("Average Change " + dollars.format(value));
document.body.appendChild(averageChangeDOM);

// You will need to track what the total change in profits are from month to month and then find the average.
// (Total/Number of months)
// The greatest increase in profits (date and amount) over the entire period.

var max = Math.max(...monthlyDifference);
var maxDOM = document.createElement('h2');

for (i = 0; i < profitAndLossArr.length; i++) {
    value = profitAndLossArr[i][1];
    if(profitAndLossArr[i][1] === max) {
        // console.log
        console.log("Greatest Increase in Profits: ", profitAndLossArr[i + 1][0], dollars.format(value));
        
        // DOM
        maxDOM.innerHTML = ("Greatest Increase in Profits: " + profitAndLossArr[i + 1][0] + " " + dollars.format(value));
        document.body.appendChild(maxDOM);
    };
};

// How to access right part of the array?
// Then I need to create a way to get the highest value. Either an if statement or Math.max
// print that value to console


// The greatest decrease in losses (date and amount) over the entire period.
var min = Math.min(...monthlyDifference);
var minDOM = document.createElement('h2');

for (i = 0; i < profitAndLossArr.length; i++) {
    value = profitAndLossArr[i][1];
    
    if(profitAndLossArr[i][1] === min) {
        // console.log
        console.log("Greatest Decrease in Profits: ", profitAndLossArr[i + 1][0], dollars.format(value));

        // DOM
        minDOM.innerHTML = ("Greatest Decrease in Profits: " + profitAndLossArr[i + 1][0] + " " + dollars.format(value));
        document.body.appendChild(minDOM);
    };
};





// £1,235 - returns the value of a number rounded to the nearest integer