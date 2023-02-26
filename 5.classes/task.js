class PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(number) {
    if (number < 0) {
      this.state = 0;
    } else if (number > 100) {
      this.state = 100;
    } else {
      this._state = number;
    }
    
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook  extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}


class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook (obj) {
    if (obj.state > 30) {
      this.books.push(obj);
    }
  }

  findBookBy(type, value) {
   return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    let indexBook = this.books.findIndex(item => item.name === bookName);
    if (indexBook !== -1) {
      let findBook = this.books.splice(indexBook, 1);
      return findBook[0];
    } else {
      return null;
    }
  }
}

class Student {
  constructor (name) {
    this.name = name;
    this.marks = {};
  }
 
  addMark (mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
   
    if (!([subject] in this.marks)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!([subject] in this.marks)) {
      return 0;
    }

    return this.marks[subject].reduce((acc, number) => acc += number) / this.marks[subject].length;
  }

  getAverage() {
    let allSubjects = Object.keys(this.marks);
    return allSubjects.reduce((acc, subject) => acc += this.getAverageBySubject(subject), 0)/allSubjects.length;
  }
}
