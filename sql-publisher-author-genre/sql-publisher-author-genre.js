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
// In this picture, the ID for publisher is static once set, and therefore is used as reference for many others

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// Again, because the genre has many publishers its static ID becomes the reference for many publishers

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// This is a many to many relationship, meaning a junction table should be used
