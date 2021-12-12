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

var sqlPublisherAuthorSchema =  OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// because publishers has many authors and authors has many publishers, the relationship is many - many and so there needs to be a new table created called publishers_authors to hold the relationship between each publisher/author id

var sqlPublisherGenreSchema =  OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// because publisher only has one genre but genre has many publishers, the relationship is one-many. this means that the publisher table must include a column called id_genre which contains the id of that genre for the publisher. this is a foreign key that points to the id of the specific genre for that publisher. the genre does not need a column for publishers, since the relationship is shown in the publisher table already.

var sqlAuthorGenreSchema =  OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// because author has many genres and genre has many authors, the relationship is many - many and needs to be a new table as well called author_genre to hold the relationship between author/genre id

/*
  * publisher, has many authors, has one genre
  * author, has many publishers, has many genres
  * genre, has many publishers, has many authors
*/