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

var sqlPublisherAuthorSchema =  Schemas.OPTION_5; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// 1 publisher, has many authors and 1 author, has many publishers: many to many relationship

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//1 publisher has one genre and 1 genre has many publishers: many to 1
var sqlAuthorGenreSchema =  Schemas.OPTION_5; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//1 author has many genres and 1 genre has many authors : many to many

// 1 publisher, has many authors, has one genre
// 1 author, has many publishers, has many genres
// 1 genre, has many publishers, has many authors