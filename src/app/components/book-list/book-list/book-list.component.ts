import { Component, OnInit } from '@angular/core';
import { BookState } from "../state/book.reducer";
import { select, Store } from "@ngrx/store";
import { getBooks } from "../state/book.action";
import { bookSelector, selectById } from "../state/book.selector";
import { Book } from "../../../models/book";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<ReadonlyArray<Book>>;
  book$: Observable<ReadonlyArray<Book>>;
  loadBook: boolean;
  bookIndex: any;


  constructor(private store: Store<BookState>) {
    this.store.dispatch(getBooks());
  }

  ngOnInit(): void {
    this.books$ = this.store.select(bookSelector);
  }

  getBookById(book: any , index: any) {
    this.bookIndex = index;
    this.loadBook = true;
    this.book$ = this.store.pipe(select(selectById(book.id)))
  }

  checkIfCardIsClicked(index: any) {
    return index === this.bookIndex;
  }
}
