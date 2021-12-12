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

var sqlPublisherAuthorSchema =  Schemas.OPTION_3; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//publisher, has many authors, has one genre --> one to many.
//Foreign key publisher_id inside "author" is a reference to publisher table


//publisher has one genre
//genre has many publishers
//
var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//publisher has one genre
//genre has many publishers
//Option 3 or 4 ? Update: Number 3 will not work, because we will have multiple publishers id in one row
//Same idea as in the first example. One genre to many publishers.
//Publisher has Foreign key "id_genre" for genre.


var sqlAuthorGenreSchema =  Schemas.FIX_ME; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//author has many genres, genre has many authors -> Many to many
// In many to many case we need additional table 
