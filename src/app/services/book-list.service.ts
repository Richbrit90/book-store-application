import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Book } from "../models/book";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  private url = 'api/books/';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<ReadonlyArray<Book>> {
    return this.http.get<ReadonlyArray<Book>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
