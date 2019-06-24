import { Injectable } from '@angular/core';
import {masterGoodreadsConfig} from './api-key';
import goodreads from 'goodreads-api-node';
const gr = goodreads(masterGoodreadsConfig);

@Injectable()
export class BookService {

  constructor() { }

  getBooksByAuthor(authorId, page) {
    gr.getBooksByAuthor('175417')
      .then(console.log);
  }
}
