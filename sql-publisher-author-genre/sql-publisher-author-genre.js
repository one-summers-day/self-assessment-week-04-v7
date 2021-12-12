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

var sqlPublisherAuthorSchema =  Schemas.OPTION_6;
// Publishers and authors have a many-to-many relationship. We cannot easily store the foreign id in each table, so instead we create an association table with one row per relationship.

var sqlPublisherGenreSchema =  Schemas.OPTION_4;
// Publishers and genres have a many-to-one relationship. So we can store the one genre_id in the publisher table as a foreign key.

var sqlAuthorGenreSchema =  Schemas.OPTION_6;
// Authors and genres have a many-to-many relationship. We cannot easily store the foreign id in each table, so instead we create an association table with one row per relationship.
