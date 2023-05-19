import { Component, Input, OnInit} from '@angular/core';
import { Movies } from '../Movies';
@Component({
  selector: 'app-exact-title-search',
  templateUrl: './exact-title-search.component.html',
  styleUrls: ['./exact-title-search.component.css']
})
export class ExactTitleSearchComponent implements OnInit {
  movieSearchList1: Movies[];
  searchBoolean: boolean;
  constructor() {
    this.movieSearchList1 = [];
    this.searchBoolean = false;
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
           this.searchBoolean = true;
        }.bind(this));
      }.bind(this));
}

  searchAgain(){
    this.movieSearchList1.length = 0;
    this.searchBoolean = false;
  }
}
