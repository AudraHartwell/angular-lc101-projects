import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!'

handleTakeOff() {
  let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
  if (result) {
     this.color = 'blue';
     this.height = 10000;
     this.width = 0;
     this.message = 'Shuttle in flight.';
  }
}
handleLand() {
  let result = window.confirm('Are you sure the shuttle is ready to land');
  if (result) {
     this.color = 'blue';
     this.height = 0;
     this.width = 0;
     this.message = 'Shuttle has landed.';
  }
}
handleAbort() {
  let result = window.confirm('Are you sure you want to abort mission?');
  if (result) {
     this.color = 'red';
     this.height = 0;
     this.width = 0;
     this.message = 'Mission Abored';
  }
}
moveRocket(rocket,direction) {
  if(direction === 'right') {
    const movement = parseInt(rocket.style.left) + 10 + 'px';
  }
}
takeOffEnabled: boolean = true;
}