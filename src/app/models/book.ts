export class Book {
  id: number;
  name: string;
  author: string;
  image:string;
  price: string;
  publication: string;
  decription: string;

  constructor(
    id?: number,
    name?: string,
    author?: string,
    image?:string,
    price?:string,
    publication?:string,
    decription?:string,
  ) {
    this.name = name;
    this.id = id;
    this.author = author;
    this.image = image;
    this.price = price;
    this.publication = publication;
    this.decription = decription;
  }
}
