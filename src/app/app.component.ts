import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = `Martin`;
  school = `Sam Universal school`;
  activeTrainee;

  academy = [{name: 'Sarah' ,image: 'sarah.jpg', complexion: 'fair', hobbies: ['Singing','Dancing']},
{
  name: 'Zino', image: 'Zino.jpg', complexion: 'dark', hobbies: ['Dancing']
},
{
  name: 'Najeeb', image: 'Najeeb.jpg', complexion: 'dark', hobbies: ['suits']
},
{ name: 'Chigo', image: 'Chigo.jpg', complexion: 'dark', hobbies: ['laughing']
}
];

traineeListener(trainee) {
  console.log(trainee);
  this.activeTrainee = trainee;
}
}
