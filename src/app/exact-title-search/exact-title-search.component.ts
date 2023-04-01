import { Component, Input, OnInit} from '@angular/core';
import { Movies } from '../Movies';
@Component({
  selector: 'app-exact-title-search',
  templateUrl: './exact-title-search.component.html',
  styleUrls: ['./exact-title-search.component.css']
})
export class ExactTitleSearchComponent implements OnInit {
  movieSearchList1: Movies[];
  constructor() {
    this.movieSearchList1 = [];
   }
  
  ngOnInit(): void {
  }
  searchMoviesExact(searchValue){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '548b07248emsh548b3fae0f86878p1bfa94jsn06296714d333',
        'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
      }
    };
      let moviesUrl = `https://mdblist.p.rapidapi.com/?s=${searchValue}`
      window.fetch(moviesUrl, options).then(function (response) {
        response.json().then(function (data){
             let rawMovies = data.search;
             console.log(data);
             for(let i=0; i < rawMovies.length; i++){
                let movies = new Movies(rawMovies[i].title, rawMovies[i].year, rawMovies[i].score_average)
                this.movieSearchList1.push(movies);
           }
           console.log(this.movieSearchList1);
           this.populateList();
        }.bind(this));
      }.bind(this));
}

addRating(movieRating){
    let rating = document.createElement("p");
    let simplifiedRating = movieRating / 10;
    rating.innerHTML = "IMDb Rating: " + simplifiedRating + "/10"
    rating.style.textAlign = "center";
    // rating.style.backgroundColor = "yellow";
    document.getElementById("lists").appendChild(rating);
}
addMovieTitle(movieTitle){
    let title = document.createElement("p");
    title.innerHTML = "Title: " + movieTitle;
    title.style.fontWeight = "bold";
    title.style.textDecoration = "underline";
    title.style.textAlign = "center";
    // title.style.backgroundColor = "yellow";
    document.getElementById("lists").appendChild(title);
}
addReleaseYear(releaseYear){
  let year = document.createElement("p");
  year.innerHTML = "Year:" + releaseYear;
  year.style.textAlign = "center";
  // year.style.backgroundColor = "yellow";
  document.getElementById("lists").appendChild(year);
}
addLists(movie){
    this.addMovieTitle(movie.title);
    this.addReleaseYear(movie.releaseYear);
    this.addRating(movie.rating);
}
populateList(){
   let results = document.createElement("h2");
   results.innerHTML = "Results: ";
   results.style.textAlign = "center";
   results.style.backgroundColor = "green"
   document.getElementById("lists").appendChild(results);
   this.movieSearchList1.forEach(movie => 
    this.addLists(movie)) 
}

}
