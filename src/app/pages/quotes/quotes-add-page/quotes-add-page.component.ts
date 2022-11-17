import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HandleErrorService } from '../../../services/handleError/handle-error.service';
import { Author, Quote } from '../../../model/author';
import { AuthorService } from '../../../services/author-service';

@Component({
  selector: 'app-quotes-add-page',
  templateUrl: './quotes-add-page.component.html',
  styleUrls: ['./quotes-add-page.component.css']
})
export class QuotesAddPageComponent implements OnInit {

  quote: string
  errorMsg: String
  author: Author = {
    name: ''
  };

  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute,
    private _handleErrorService: HandleErrorService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      let id = params['id'];
      this._authorService.getAuthor(id).subscribe(resp => {
        this.author = resp.author;
      })
    });
  }

  createQuote() {

    let quote: Quote = {
      quote: this.quote
    }

    this._authorService.createQuote(this.author._id, quote).subscribe(resp => {
      this._router.navigate(['/']);
    },
      error => {
        this.errorMsg = this._handleErrorService.handleError(error);
      });
  }

  clickSubmit() {
    this.createQuote();
  }

}
