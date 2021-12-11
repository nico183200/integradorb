const movies = require('./movies.json');

/**
 * Get all movies with an metascore greater than 80
 * @param {number} metascore
 * @returns {Array} of movie objects
 * 
 */
function getOnlyGoodMovies(metascore) { 
    
}

/**
 * Get imdb_title_id from movies and create the movies links
 * @returns {string}
 * 
 */
 function getGoodImdbLinks(){

   
   

}

function main(){
    const goodMovies = getOnlyGoodMovies(80);
    const goodLinks = getGoodImdbLinks();
    console.log(`Only movies with metascore of 80 or higher:\n${goodMovies}\n`);
    console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();