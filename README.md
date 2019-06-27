## My Virtual Bookshelf

An app to search for and organize all the books on your reading list, using the Google Books API! Users can create a "virtual bookcase" ordering books by what they want to read, are reading and have read. Created as a group project for Epicodus, demonstrating knowledge of JavaScript, Angular, API calls and more.

#### by Ian Christopher, Kevin Garvey, Svitlana Filanova, Marguerite Kennedy and Tessa Sullivan.

### Description

Is your IKEA bookshelf about to collapse under the weight of the books? Here's a way to find and organize everything you want to read and have read. User will be able to search books based on  based on data provided by the Google Books API. They will then be able to add these books to their "bookshelf," sorted by "read" or "unread."

Future buildout could include links to other user bookshelves, or searching for book recommendations based on users who have at least one of the same books on their bookshelves, although that functionality is not in the immediate scope of this project. Other possible features could eventually include a "virtual librarian" that would recommend books based on interests, mood, etc. It could also directly download books in the public domain available via Google Books.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Angular.js]

## Installation

* `git clone <repository-url>` this repository
* `npm install`
* `ng serve`
* Navigate to `localhost:4200` in your browser
* Find something great to read!

## Code Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|User lands on homepage.|User logs in to search books by *author, title and/or subject| The app returns a list of relevant books based on search |
|User wants to create a "bookshelf" to sort books|Using checkboxes, user sorts books by by "Want to Read," "Currently Reading" and "Have Read.| Books with title and cover appear in the appropriate "shelf."|

## Technologies Used

_Technologies used include NPM, Angular, Node.js, Javascript, Typescript, Firebase, Bootstrap, SCSS, SASS, HTML, and Git/Github and the Google Books API_

_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0._

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

*This software operates under the MIT license.*

Copyright (c) 2019 **_Ian Christopher, Kevin Garvey, Svitlana Filanova, Marguerite Kennedy and Tessa Sullivan_**
