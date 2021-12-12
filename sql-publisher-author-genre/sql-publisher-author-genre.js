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
// Because publishers and authors have a many-to-many relationship, an associative table would be best to properly represent it. Otherwise, the foreign key for each would have multiple entries.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// A publisher has one genre but a genre has many publishers. With this one-to-many relationship, the foreign key would need to be stored in the publishers table since the other way around would result in multiple entries for each genre.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// Because authors and genrees have a many-to-many relationship, an associative table would be best to properly represent it. Otherwise, the foreign key for each would have multiple entries.

