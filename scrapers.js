const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch(); // launches headerless browser 
    const page = await browser.newPage(); // opens a new page/tab
    await page.goto(url); // goes to input url 

    const [el] = await page.$x('/html/body/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[1]'); // sets information from the div to a new array
    const txt = await el.getProperty('textContent'); // gets the text content from [el]
    var launchDate = await txt.jsonValue(); // sets txt to json format

    launchDate = launchDate.trim(); // gets rid of erroneous characters 


    const [el2] = await page.$x('//*[@id="ember14"]/div/div[2]/div[2]/div[2]'); // sets information from the div to a new array
    const txt2 = await el2.getProperty('textContent'); // gets the text content from [el]
    var mission = await txt2.jsonValue(); // sets txt to json format

    mission = mission.trim(); // gets rid of erroneous characters  
    mission = mission.replace(/(\r\n|\n|\r)/gm, ""); // gets rid of more characters the trim did not catch
    mission = mission.replace(/  +/g, ' ');
  

    const [el3] = await page.$x('//*[@id="ember14"]/div/div[2]/div[2]/div[3]'); // sets information from the div to a new array
    const txt3 = await el3.getProperty('textContent'); // gets the text content from [el]
    var description = await txt3.jsonValue(); // sets txt to json format

    description = description.trim(); // gets rid of erroneous characters  

    console.log({ launchDate, mission, description }); // outputs the three fields in one object 

}

scrapeProduct('https://www.nasa.gov/launchschedule/');