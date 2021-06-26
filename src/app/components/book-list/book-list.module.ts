import {EffectsModule} from '@ngrx/effects';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryService} from "../../services/in-memory.service";
import {BookEffects} from "./state/book.effects";
import {BookListComponent} from "./book-list/book-list.component";
import {BookListRoutingModule} from "./book-list.routing.module";

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookListRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    EffectsModule.forFeature([BookEffects]),
  ],
  providers: [],
})
export class BookListModule {
}
