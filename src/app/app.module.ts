import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExactTitleSearchComponent } from './exact-title-search/exact-title-search.component';
import { MovieQuizComponent } from './movie-quiz/movie-quiz.component';
import { HighScoreListComponent } from './high-score-list/high-score-list.component';
import { SaveYourScoreComponent } from './save-your-score/save-your-score.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExactTitleSearchComponent,
    MovieQuizComponent,
    HighScoreListComponent,
    SaveYourScoreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
