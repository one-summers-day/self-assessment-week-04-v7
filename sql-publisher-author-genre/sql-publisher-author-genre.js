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

var sqlPublisherAuthorSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//publishers have many authors and authors have many publishers so we want to create a junction table that holds the ids of both and can relate each author to a publisher and vice versa.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//publishers have one genre and genres have many publishers. therefore publishers should have a foreign key of genre relating it back to the genre and each genre can have many publishers pointing to its id

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//genres have many authors and authors have many genres so we want to create a junction table that holds the ids of both and can relate each author to a genre and vice versa.

