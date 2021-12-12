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
//maybe 3 or 4?
var sqlPublisherAuthorSchema =  Schemas.OPTION_3; // TODO: Update this constant
// TODO: Write a comment here explaining your choice

//both publishers and authors have one to many relation, either choice 3 or 4
var sqlPublisherGenreSchema =  Schemas.OPTION_3; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//many to many relation, need publisher's id in genre

//maybe 6?
var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//many to many relationship, possible need intermediate table?