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
// For as many to many relationship an extra relationship table where the ids for both tables will be joined. This way the table Authors and Schemas don't need any repetions.

var sqlPublisherGenreSchema =  Schemas.OPTION_4;
// On one to many relationships, we only need to add the id of the table row that can be in many rows of the other table to the other table as a foreign key.

var sqlAuthorGenreSchema =  Schemas.OPTION_6;
//  Same as sqlPublisherAuthorSchema