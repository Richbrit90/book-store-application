import { Injectable } from '@angular/core';
import { Book } from "../models/book";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      books: this.mockBooks(),
      user: this.mockUser(),
    };
  }

  private mockBooks(): Book[] {
    const book = new Book(
      1,
      'Cat Lovers - World',
      'Richard',
      'https://placekitten.com/200/300',
      '€ 20',
      '2020',
      'A fun filled story about cat lovers who goes around the world to see different cats.Wanders to capture different cats'
    );

    const book1 = new Book(
      2,
      'Biography of World',
      'Joselin',
      'https://i.picsum.photos/id/794/200/300.jpg?hmac=uZge4lPPf2bQz7AS6pyH7_nwhFp9IQ3OPKOpQ33Zypk',
      '€ 30',
      '2019',
      'A thriller story about biography of Jeselin and the rest of the world who wanted to rule the economy of the world'
    );

    const book2 = new Book(
      3,
      'Jack & Jill',
      'Aiden',
      'https://i.picsum.photos/id/736/200/300.jpg?hmac=WlU1DEqIVU_kIsTa682WsLgBIfCRbqhOAuKifGAq8TY',
      '€ 50',
      '2015',
      'Jack and Jill went upto the hill to fecth a pile of Water.Jack fell down and broke his head and jill came tumbling after.'
    );

    const book3 = new Book(
      4,
      'Humpty Dumpty',
      'Jennita',
      'https://placekitten.com/g/200/300',
      '€ 70',
      '2017',
      'Jack and Jill went upto the hill to fecth a pile of Water.Jack fell down and broke his head and jill came tumbling after.'
    );

    const books = [book, book1, book2, book3];
    return books;
  }

  private mockUser(): User {
    const user = new User(
      'test@test.com',
      '2798',
      'test'
    );

    return user;
  }
}
