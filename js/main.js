//arrayni splice qilish
const movie = kinolar.slice(0, 100);

// fragment ochish
let elMovieWrapperFragment = document.createDocumentFragment();


const movieList = document.querySelector(".movies-list");

movie.forEach(function(kino) {





 // Elementlarni yaratish
   

    const movieItem = createElement("li", "card w-25 m-3 bg-info");
     
    
    const movieTitle = createElement("h3", "movie-title text-center text-danger h1", kino.title);
    const movieYear = createElement("p", "movie-year fs-3 text-success", kino.year);
    const movieCast = createElement("h4", "casting h2", "Casting");
    const castingList = createElement("ul", "cast-item");
    const movieGenre = createElement("h4", "h2", "Genres:");
    const genresList = createElement("p", "text-primary", kino.genres);
    


    for (let j = 0; j < kino.cast.length; j++) {
        const castItem = kino.cast[j];

        
        const castingItem = createElement("li", "", castItem);
        castingList.append(castingItem);
    }

   movieList.append(movieItem);
   movieItem.append(movieTitle, movieYear, movieCast, castingList, movieGenre, genresList);

});

movieList.append(elMovieWrapperFragment);