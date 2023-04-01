import { Component, OnInit } from '@angular/core';
import { QuizMovies } from '../QuizMovies';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-quiz',
  templateUrl: './movie-quiz.component.html',
  styleUrls: ['./movie-quiz.component.css']
})
export class MovieQuizComponent implements OnInit {
  saveScoreBoolean: boolean;
  scoreToBeSaved: number;
  questionNumber: number;
  quizScore: number;
  movieQuestions: QuizMovies[];
  movieQuizList: QuizMovies[];
  movieQuizListOriginal: QuizMovies[];
  randomSelector: number;
  optionsSelected: number;
  testFinished: boolean;
  startButtonPressed: boolean;

  constructor( private router: Router) {
    this.movieQuizListOriginal = [];
    this.movieQuizList = [];
    this.movieQuestions = [];
    this.questionNumber = 0;
    this.testFinished = false;
    this.quizScore = 0;
    this.startButtonPressed = false;
   }

  ngOnInit(): void {
  }
  getTopRatedMovies(){
    this.saveScoreBoolean = true;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '548b07248emsh548b3fae0f86878p1bfa94jsn06296714d333',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };
    let moviesUrl = 'https://imdb-top-100-movies.p.rapidapi.com/'
    window.fetch(moviesUrl, options).then(function (response) {
      response.json().then(function (data){
          console.log(data);
           let rawMovies = data;
           for(let i=0; i < rawMovies.length; i++){
             let movies = new QuizMovies(rawMovies[i].title, rawMovies[i].description, rawMovies[i].director);
             this.movieQuizList.push(movies);
         }
         this.movieQuizListOriginal = this.movieQuizList;
         this.startButtonPressed = true;
         this.getQuizQuestions();
      }.bind(this));
    }.bind(this));
}
getQuizQuestions(){  
    if(this.movieQuestions.length == 0){
    for(let i=0; i < 10; i++){
      let randomNumber = Math.floor(Math.random()*90);
      this.movieQuestions.push(this.movieQuizList[randomNumber]);
      this.movieQuizList.splice(randomNumber, 1);
    }
    console.log(this.movieQuizList);
    console.log(this.movieQuestions);
    }
    this.populateQuizQuestions();
}

populateQuizQuestions(){
  document.getElementById("buttons").style.visibility = "visible";
  document.getElementById("test").style.backgroundColor = "rgb(211, 207, 207)";
  document.getElementById("buttons").style.backgroundColor = "rgb(211, 207, 207)";
  let answer0 = document.getElementById("answer0");
  let answer1 = document.getElementById("answer1");
  let answer2 = document.getElementById("answer2");
  let answer3 = document.getElementById("answer3");
  let question = document.getElementById("Question");
  answer0.style.width = "800px";
  answer1.style.width = "800px";
  answer2.style.width = "800px";
  answer3.style.width = "800px";
  this.randomSelector = Math.floor(Math.random()*4)
  question.innerHTML = "Question " + (this.questionNumber + 1) + " of 10." + "  Which of the following movies match this description:   " + this.movieQuestions[this.questionNumber].description;
  let random1 = Math.floor(Math.random()*80);
  let random2 = Math.floor(Math.random()*80);
  let random3 = Math.floor(Math.random()*80);
  let random4 = Math.floor(Math.random()*80);
  let ranArray = [random1, random2, random3, random4];
  for(let i=0; i < ranArray.length; i++){
    for(let j=0; j < ranArray.length; j++){
      if(ranArray[i] == ranArray[j]){
        if(i != j){
          ranArray[j] = Math.floor(Math.random()*80);
        }
      }
    }
  }
  answer0.innerHTML = this.movieQuizList[ranArray[0]].title;
  answer1.innerHTML = this.movieQuizList[ranArray[1]].title;
  answer2.innerHTML = this.movieQuizList[ranArray[2]].title;
  answer3.innerHTML = this.movieQuizList[ranArray[3]].title;
  document.getElementById("answer" + this.randomSelector).innerHTML = this.movieQuestions[this.questionNumber].title;
  this.questionNumber++;
}
gradeQuizQuestions(){
  if(this.randomSelector == this.optionsSelected){
         this.quizScore++;
     }
  if(this.questionNumber >= 10){
        this.testFinished = true;
     }
     else{
      this.populateQuizQuestions();
     }
    
}

clicked1(){
  this.optionsSelected = 0;
  this.gradeQuizQuestions();
}
clicked2(){
  this.optionsSelected = 1;
  this.gradeQuizQuestions();
}
clicked3(){
  this.optionsSelected = 2;
  this.gradeQuizQuestions();
}
clicked4(){
  this.optionsSelected = 3;
  this.gradeQuizQuestions();
}
tryAgain(){
  this.movieQuestions.length = 0;
  this.questionNumber = 0;
  this.quizScore = 0;
  this.testFinished = false;
  this.movieQuizList.length = 0;
  this.movieQuizListOriginal.length = 0;
  this.getTopRatedMovies();
}

saveScore(){
  this.saveScoreBoolean = false;
  this.scoreToBeSaved = this.quizScore;
  this.router.navigate(["/SaveScore"], {state: {data: this.scoreToBeSaved}});
}
}
