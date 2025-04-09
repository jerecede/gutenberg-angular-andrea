import { Component, inject, input, numberAttribute, output } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

  book = input<Book>(); //input.required<Book>();
  bookSelected = output<Book | undefined>();

  resizeTitle(title: string, maxWords: number): string {
    const wordsArray = title.split(' ');
    const resizedArray = wordsArray.slice(0, maxWords);
    let resizedTitle = resizedArray.join(' ');
    if (title.length !== resizedTitle.length) {
      resizedTitle += '...';
    }
    return resizedTitle;
  }

  selectBook() {
    this.bookSelected.emit(this.book());
  }
}
