import { Component } from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {
  firstName = "Süleyman Türker";
  lastName = "GÜNER";
  email = "gunersuleymanturker@gmail.com";
  place = "Antalya";
  profession = "Software Developer";
  company = "Talya Bilişim";
  message = "I am a software developer who is interested in web technologies and mobile technologies. I am also interested in artificial intelligence and machine learning. I am currently working as a software developer at Talya Bilişim.";
}
