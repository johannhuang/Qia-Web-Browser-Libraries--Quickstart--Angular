import { Component, ElementRef, OnInit } from '@angular/core';
import { QiaText } from 'qia-browser-libraries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Qia Web Browser Libraries - Quickstart';

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    const { MarkDownText: QiaMarkDownText } = QiaText

    const qiaMarkDownTextElements = this.element.nativeElement.querySelectorAll('.qia-markdown-text')

    const qiaMarkDownTextElement1 = qiaMarkDownTextElements[1]
    const qiaMarkDownText1 = new QiaMarkDownText(qiaMarkDownTextElement1)

    const qiaMarkDownTextElement2 = qiaMarkDownTextElements[2]
    const qiaMarkDownText2 = new QiaMarkDownText(qiaMarkDownTextElement2, {
      editMode: true,
      fullScreenAllowed: true
    })
  }
}
