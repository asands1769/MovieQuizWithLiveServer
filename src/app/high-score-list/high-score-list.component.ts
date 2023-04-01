import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-high-score-list',
  templateUrl: './high-score-list.component.html',
  styleUrls: ['./high-score-list.component.css']
})
export class HighScoreListComponent implements OnInit {
  userList: User[];
  orderedUserList: User[];
  constructor(private http: HttpClient) {
      this.userList = [];
      this.orderedUserList = [];
   }

  ngOnInit(): void {
      this.fetchUsers()
  }

  onProductsFetch(){
    this.fetchUsers()
  }
  organizeData(){
    this.orderedUserList = this.userList.sort(function(b, a) {
      return a.score - b.score
    });
    console.log(this.orderedUserList);
  }
  private fetchUsers() {
      this.http.get<{[key: string]: User}>('https://movie-quiz-project-default-rtdb.firebaseio.com/users.json')
      .pipe(map((res) =>{
        const users = [];
          for(const key in res){
            if(res.hasOwnProperty(key)){
              users.push({...res[key], id: key})
            }
          }
          return users;
      }))
      .subscribe((users) => {
        console.log(users);
        this.userList = users;
        this.organizeData();
      })
}
}

