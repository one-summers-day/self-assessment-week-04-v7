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

/*
  * publisher, has many authors, has one genre
  * author, has many publishers, has many genres
  * genre, has many publishers, has many authors
*/

var sqlPublisherAuthorSchema =  Schemas.OPTION_6; // TODO: Update this constant
// Many to many relationship, best to store in a join table.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// A many to one relationship. Publisher can have only one genre, so can store a single ID.
//Genre's many publishers can be found by searching publisher where id_genre matches the id/name row of genre table.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// Another many to many, reasoning is the same.
