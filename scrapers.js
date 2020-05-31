const axios = require('axios');
const cheerio = require('cheerio');


axios.get('https://www.nasa.gov/launchschedule/')
    .then(res => {
        // console.log(res.data, 'what we want');

        const info = []; 
        async function getting() {


            const $ = cheerio.load(res.data);
    
            await $('title').each((index, element) => {
                const title = $(element).text();
                // console.log('hit here');
                return info[index] = {...info, title}
           
            })

            await $('.description').each((index, element) => {
                const description = $(element).text();
                // const description = 'world';
                // console.log('hit here');
                return info[index] = {...info, description}
    
            })

            // return info = {
            //     title,
            //     description, 
            //     date
            // }
        }

        getting()
        console.log(info);



})







// const $ = cheerio.load('https://www.wikipedia.org/');


// $('.central-featured').each((i, e) => {

//     const content = $(e).find('.central-featured-lang');

//     launchList[i] = {content}

// })
// console.log(launchList);
