import { Component, OnInit } from '@angular/core';
import { Quote }from  '../quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1, 'Dont stop when you are tired.Stop when you are done.', 'Wesley Snipes', new Date(2015, 7, 6)),
    new Quote(2, 'You can never cross the ocean until you have the courage to lose sight of the shore.', 'Christopher Columbus', new Date(1500, 11, 20)),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
