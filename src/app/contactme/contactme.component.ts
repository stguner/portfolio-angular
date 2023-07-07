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
  profession = "Web Developer";
  company = "Talya Bilişim";
  message = "Talya Bilişim şirketinde stajyer olarak çalışıyorum";
}
