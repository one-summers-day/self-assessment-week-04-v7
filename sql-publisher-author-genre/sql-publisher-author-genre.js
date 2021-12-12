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

// The publisher has many authors and vice versa. This is a many to many relation, we should use a helper table in here.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice

// There is only 1 genre but there can be many publishers for the same genre. So this is a one (genre) to many (publisher) relationship, number 4 is the choice here.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice

// There can be many authors for a genre and many genre for an author. Like Publisher and Author, this is a many to many relationship. Option 6 is the way to go.
