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

var sqlPublisherAuthorSchema =  Schemas.OPTION_5; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// The publisher has many different authors that write for it, so it would make sense
// for the publishers to track the id information of the authors. In addition, the
// authors have many publishers so they would need to keep track of the publishers

var sqlPublisherGenreSchema =  Schemas.OPTION_3; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// The publisher only has one genre, but each genre has many publishers. Genre
// should track publishers

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// The author has many genres and many publishers
