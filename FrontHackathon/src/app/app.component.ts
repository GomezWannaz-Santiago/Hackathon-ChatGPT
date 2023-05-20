import { Component } from '@angular/core';
import { ChatGptService } from './services/chat-gpt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'FrontHackathon';
  constructor(private chatGpt : ChatGptService){
    this.chatGpt.getDataFromOpenAI("Hola ChatGPT")
    .subscribe(data => {
      console.log(data)
    })
  };


  

}
