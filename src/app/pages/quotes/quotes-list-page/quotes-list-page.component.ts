import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Author, Quote } from '../../../model/author';
import { AuthorService } from '../../../services/author-service';

@Component({
  selector: 'app-quotes-list-page',
  templateUrl: './quotes-list-page.component.html',
  styleUrls: ['./quotes-list-page.component.css']
})
export class QuotesListPageComponent implements OnInit {

  author: Author = {
    _id: '',
    name: ''
  }

  constructor(private _route: ActivatedRoute, private _authorService: AuthorService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.getAuthor(id);
    });
  }

  getAuthor(id) {
    this._authorService.getAuthor(id).subscribe(resp => {
      this.author = resp.author;
    })
  }

  updateQuote(quote: Quote) {
    this._authorService.updateQuote(quote._id, quote).subscribe(resp => {
      console.log('updateQuote', resp);
    },
      error => console.log('error', error));
  }

  clickVoteUp(quote: Quote) {
    quote.score++;
    this.updateQuote(quote);
  }

  clickVoteDown(quote: Quote) {
    if(quote.score > 0) {
      quote.score--;
      this.updateQuote(quote);
    }
  }

  deleteQuote(quote: Quote) {
    this._authorService.deleteQuote(this.author._id, quote._id).subscribe(resp => {
      let idx = this.author.quotes.indexOf(quote);
      this.author.quotes.splice(idx, 1);
    },
      error => console.log('error', error));
  }

}
