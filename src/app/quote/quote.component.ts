import { Component, OnInit } from '@angular/core';
import { Quote }from  '../quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1, "Don't stop when you are tired.Stop when you're done.", 'Wesley Snipes', new Date(2015, 7, 6)),
    new Quote(2, 'You can never cross the ocean until you have the courage to lose sight of the shore.', 'Christopher Columbus', new Date(1500, 11, 20)),
    new Quote(3, 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.', 'Aristole', new Date(2000, 10, 30)),
    new Quote(4, "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.", 'Barbara Baron', new Date(2002, 12, 23)),
    new Quote(5, "If you continue to think the way you've always thought, you'll continue to get what you've always got.", 'Kelvin Trudeau', new Date(1999, 11, 1)),
    new Quote(6, 'Action may not always bring hapiness; but there is no happiness without action.', 'Benjamin Disraeli', new Date(2010, 4, 4)),
  ];

  toggle = false;
  
  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  // completeQuote(isComplete:any, index:any){
  //   if(isComplete){
  //     this.quotes.splice(index,1)
  //   }
  // }

  constructor() { }

  ngOnInit(){

  }

}
