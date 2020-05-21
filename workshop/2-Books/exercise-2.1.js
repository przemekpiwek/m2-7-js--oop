// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}

const book1 = new Book("Dune", "Sci-Fi", "Frank Hubert", true);
const book2 = new Book("Ubik", "Sci-Fi", "Philip K Dick", true);
const book3 = new Book(
  "Ham on Rye",
  "Autobiographical",
  "Charles Bukowski",
  true
);
const book4 = new Book(
  "Me Talk Pretty One Day",
  "Comedy",
  "David Sedaris",
  true
);
const book5 = new Book("East of Eden", "Fiction", "John Steinbeck", true);

console.log(book1, book2, book3, book4, book5);
