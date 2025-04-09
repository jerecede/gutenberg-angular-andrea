import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from "../book-card/book-card.component";
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, BookCardComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  bookServ = inject(BookService);

  getMoreBooks() {
    this.bookServ.page.update(actualPage => actualPage + 1);
  }

  cardSelected(book: Book | undefined) {
    if(book){
      console.log('chi ha cliccato mio figlio: ' + book.title);
    }
  }
}
