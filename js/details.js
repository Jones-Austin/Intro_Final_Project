var title = localStorage.getItem('clickedImage');
var current_movie;
for (var i = 0; i < all_movies.length; i++){
    if (all_movies[i].title == title){
        current_movie = all_movies[i];
        break;
    }
}
document.getElementById('title').innerHTML = current_movie.title;
document.getElementById('year').innerHTML = current_movie.year;
document.getElementById('genre').innerHTML = current_movie.genre;
document.getElementById("description").innerHTML = current_movie.title + " is rated " + current_movie.rating + " on IMDb.";
document.getElementById("cover").src = current_movie.art;
