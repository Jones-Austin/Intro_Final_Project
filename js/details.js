var title = localStorage.getItem('clickedImage');
var current_movie;
for (var i = 0; i < all_movies.length; i++){
    if (all_movies[i].title == title){
        current_movie = all_movies[i];
        break;
    }
}
