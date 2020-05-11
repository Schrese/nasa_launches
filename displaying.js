const Scrape = require('./scrapers'); // seem to be having an issue using "require" on the browser, but I am guessing it will be solved when we introduce it to the extension by using the manifest

Scrape.scrapeProduct('https://www.nasa.gov/launchschedule/') // using function from scrapers.js
    .then(res => {
        console.log(res, 'from displaying.js')
        let data = res; // returns "together" object from scrapers.js
        createInfo(data); // uses the createInfo function and passes in the data from the response
    })
    .catch(err => {
        console.log(err, 'error in displaying.js') // displays the error
    })

const launch = document.getElementById('launch'); // have a problem with "document" but should be solved with manifest

function createInfo(obj) { // creates content to be displayed

    const info = document.createElement('div'); // full div
    const launchDate = document.createElement('p'); // date
    const launchMission = document.createElement('p'); // mission
    const launchDescription = document.createElement('p'); // desc

    info.append(launchDate, launchMission, launchDescription); // puts the p tags inside the info div
    launch.appendChild(info); // puts info div inside thte launch div

    launchDate.textContent = obj.date; // creates date text
    launchMission.textContent = obj.mission; // creates mission text
    launchDescription = obj.desc; // creates description text

    return info;
}