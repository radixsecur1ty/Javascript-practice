var bookCatalog = {
  'myBook1' : {
    'title': 'To Kill a Mockingbird',
    'author': 'Harper Lee',
    'genre': 'coming-of-age story',
    'year of publication': 2015,
    'rating': 5,
    'has been read': true,
    'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'p116': 'quote from page 116.',
      'p124': 'quote from page 124',
      'p309': 'quote from page 309'
    },
    'borrowed by': null
  },

  'myBook2' : {
    'title': 'hitchikers guide of galaxy',
    'author': 'Jhony Cash',
    'genre': 'fantasy',
    'year of publication': 2012,
    'rating': 4,
    'has been read': false,
    'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'p144': 'quote from page 144.',
      'p89': 'quote from page 89',
      'p300': 'quote from page 300'
    },
    'borrowed by': 'Kate'
  },

  'myBook3' : {
    'title': 'The lord of the rings',
    'author': 'unknown author',
    'genre': 'drama',
    'year of publication': 1999,
    'rating': 3,
    'has been read': true,
    'main characters': ['gollam', 'samu', 'frodo'],
    'quotes': {
      'p75': 'quote from page 75.',
      'p122': 'quote from page 122',
      'p366': 'quote from page 366'
    },
    'borrowed by': null
  },
  //page marker function
  'page marker': function(book) {
    var pageInitial = this[book].page;
    this[book].page =  prompt('What page are you on?');

    if (typeof pageInitial === 'undefined'){
      alert('You are on page: '+ this[book].page);
    }
    else {
      alert('You are on page: '+ this[book].page+' in the book named: '+ this[book].title+'. You have read '+ (this[book].page - pageInitial)+ 'since last time.' );
    }

  },
  //Mark all of the unread books function
  'unread': function () {
    var booksToRead = [];
    for (var book in this) {
      if (this[book]['has been read'] === false) {
        booksToRead.push(this[book].title);
      }
    }
    if (booksToRead.length === 0) {
      console.log('You have read all your books.');
    } else {
      console.log('You have not read the following books: ' + booksToRead);
    }
  },
  //property changer function
  'propertyChanger': function(book,property){
    this[book][property] = prompt('Type in the new value of ' + property + 'in this book: '+ this[book].title  );
    alert('The changed property is '+ property + ', and the new value of it is: '+ this[book][property]);
  },

  //type a new quote function
  'add quote': function(book,page){
  this[book].quotes['p'+page] = prompt('Please type in the quote.');
  alert('the quote has been saved for the book named: '+ this[book].title);


  },
  //borrowed list
  'borrowed list': function(){
    var borrowedArray = [];
    for (var book in this){
      if (typeof this[book] !== 'function'){
        if (typeof this[book]['borrowed by'] === 'string' ){
          borrowedArray.push(this[book].title);
        }
      }
    }
    if (borrowedArray.length === 0){
      console.log('None of your books are borrowed.');
    }
    else {
      console.log('Your borrowed books are the next ones: '+ borrowedArray);
    }
  }


}

