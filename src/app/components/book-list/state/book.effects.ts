import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { getBooks, getBooksSuccess } from "./book.action";
import { BookListService } from "../../../services/book-list.service";



@Injectable()
export class BookEffects {


  constructor(private action$: Actions, private bookListService: BookListService) {}


  loadBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(getBooks),
      exhaustMap(() =>
        this.bookListService.getBooks().pipe(
          map((books) => getBooksSuccess(books)),
        )
      )
    )
  );
}
