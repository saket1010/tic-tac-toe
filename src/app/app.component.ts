import { Component, VERSION } from '@angular/core';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  matrixSize: Number = 3;
  matrix = new Array(new Array(6));
  constructor() {
    for (let i = 0; i < this.matrixSize; i++) {
      for (let j = 0; j < this.matrixSize; j++) {
        this.matrix[i][j] = Number(0);
      }
    }
  }

  name = 'Angular ' + VERSION.major;
  userid: Number = 0;
  clickedonDiv(id: string) {
    console.log(id);
    document.getElementById(id).className = 'user1';
    if (this.userid == 0) {
      this.insertPoint(Number(id), this.userid);
      this.userid = 1;
    } else if (this.userid == 1) {
      this.insertPoint(Number(id), this.userid);
      this.userid = 0;
      document.getElementById(id).className = 'user2';
    }
    if (this.checkResult() == true) {
      alert(this.userid + ' WON');
    }
  }
  checkResult(): boolean {
    //horizontal check
    let i = 0;
    let j = 0;
    for (let i = 0; i < this.matrixSize; i++) {
      let count = 0;
      var temp = this.matrix[i][j];

      for (let j = 0; j < this.matrixSize; i++) {
        if (this.matrix[i][j] == temp) {
          count++;
        } else {
          break;
        }
      }
      if (this.matrixSize == count) {
        return true;
      }
    }
    return false;
  }
  insertPoint(id: Number, userid: Number) {
    var count: Number = 1;
    for (let i = 0; i < this.matrixSize; i++) {
      for (let j = 0; j < this.matrixSize; j++) {
        console.log(userid + '' + count);
        if (count == id) {
          {
            this.matrix[i][j] = userid;
          }
        }
      }
    }
  }
}
