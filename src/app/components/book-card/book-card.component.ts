import { Component, inject, input, numberAttribute } from '@angular/core';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

  bookId = input(-1, {alias: 'book-id', transform: numberAttribute});
  imgUrl = input('', { alias: 'image-url' })
  title = input('', { alias: 'book-title', transform: (title: string) => this.resizeTitle(title, 8) });

  bookServ = inject(BookService);

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
    this.bookServ.selectBookById(this.bookId());
  }
}
