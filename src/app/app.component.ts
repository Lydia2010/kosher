import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kosher';
  cardTitle = 'This is a card';
  cardSubtitle = 'This is subtitlecard';
  cardContetnt = 'This is a very nice first card';
  // Init method
  ngOnInit(): void {
    this.title = 'WORD!!!!';
  }


}

