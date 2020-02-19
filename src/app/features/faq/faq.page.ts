import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  selectedQuestionIndex = -1
  constructor() { }

  ngOnInit() {
  }

  onSelectQuestion(index){
    this.selectedQuestionIndex = index;
  }

}
