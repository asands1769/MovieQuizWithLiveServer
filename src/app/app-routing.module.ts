import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExactTitleSearchComponent } from "./exact-title-search/exact-title-search.component";
import { MovieQuizComponent } from "./movie-quiz/movie-quiz.component";
import { SaveYourScoreComponent } from "./save-your-score/save-your-score.component";
import { HighScoreListComponent } from "./high-score-list/high-score-list.component";

const routes: Routes = [
    {path: 'TitleSearch', component: ExactTitleSearchComponent},
    {path: 'Quiz', component: MovieQuizComponent},
    {path: 'SaveScore', component: SaveYourScoreComponent},
    {path: 'HighScoreslist', component: HighScoreListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }