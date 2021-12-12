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
// Because one publisher has many authors, and one author has many publishers
// we can create a join table to create two one-to-many relations

var sqlPublisherGenreSchema =  Schemas.OPTION_3; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Since publishers only have one genre, we can give our genre table a foreign key
// of id_publisher

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Because we have a many-to-many relation between authors and genres
// we can again create a join table to create two one-to-many relations
