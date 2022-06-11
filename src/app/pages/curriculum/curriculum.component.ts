import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  name: string = 'Jhironsel Diaz A.';
  email: string = 'jhironsel@hotmail.com';
  email2: string = 'jhironseld@gmail.com';
  tel: string = '(829) 297-2015';
  tel2: string = '(849) 221-2022';
  constructor() { }

  ngOnInit(): void {
  }

}
