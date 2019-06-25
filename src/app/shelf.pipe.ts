import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.model';

@Pipe({
  name: "shelf",
  pure: false
})

export class ShelfPipe implements PipeTransform {
  transform(input: Book[], desiredShelf) {
    var output: Book[] = [];
    if(desiredShelf == "wantToRead") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].shelf == "wantToRead") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredShelf == "currentlyReading") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].shelf == "currentlyReading") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredShelf == "finishedReading") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].shelf == "finishedReading") {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
