import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-description',
  // templateUrl: './welcome-description.component.html',
  template: '<p class="title">{{ title }}</p><p>{{ description }}</p>',
  styleUrls: ['./welcome-description.component.scss']
})
export class WelcomeDescriptionComponent implements OnInit {
  title = 'Bem-vindo(a)!';
  description = 'Sou entusiasta do mundo da programação e é uma alegria imensa ter você aqui. Porque não aproveita para conhecer um pouco mais sobre mim e meus trabalhos?';

  constructor() { }

  ngOnInit() {
  }

}
