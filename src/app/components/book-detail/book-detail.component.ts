import { Component, inject, input } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  book = input<Book>();
}
