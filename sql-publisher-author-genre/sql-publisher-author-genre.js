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


// publisher and authors is many to many
//publishes to genre is many to one
//author to genre is many to many
//genre to publishes is many to many
var sqlPublisherAuthorSchema =  Schemas.OPTION_6;
// author and publishes have a many to many relationship
// there are multiple authors for each publisher and multiple publishers for each author
//option 6 combines the many to many relationship with
//an association table

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO:
//publishers have one genre
//genres have many publishers = one to many

var sqlAuthorGenreSchema =  Schemas.OPTION_6;
//Genre has many authors/ authors has many genres = many to many relationship
//Many to many relationship is brought together with an association table
