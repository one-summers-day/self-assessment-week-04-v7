var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

// publisher, has many authors, has one genre
// author, has many publishers, has many genres
// genre, has many publishers, has many authors


var sqlPublisherAuthorSchema =  Schemas.OPTION_6; // Publisher <---> Author
// since "publisher has many authors " so having third table that has a foreign key
//as both publisher and authors
//would help managing data and looking up easier, because Publisher has many authors and also author can work in many ///publisher too



var sqlPublisherGenreSchema =  Schemas.OPTION_4; // Publisher <---> Genre 
// because publisher has ONLY ONE genre, but genre has many publisher
//

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // Author <---> Genre many - many
// genre, has many publishers and many authors, so that one author can have many genre
// having foreign key of author and genre on thrid table would be the best way to look up a data
