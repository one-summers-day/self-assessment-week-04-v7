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
// Publishers have many authors and authors have many publishers, so this is a many-to-many relationship. In these cases, we want to create a third table that links publisher ids to author ids, as is the case in option 6.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// Publishers have one genre, and genres have many publishers, so this is a one-to-many relationship. In this case, we want to add a foreign key corresponding to the id field in the genre table to to the publisher table, which is option 4.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// Authors have many genres, and genres have many authors, so this is a many-to-many relationship. In these cases, we want to create a third table that links author ids with genre ids, which is option 6.
