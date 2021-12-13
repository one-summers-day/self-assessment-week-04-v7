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
// We use the concept of foreign keys to import from foreign tables.
// Because a publisher has many authors, it makes sense for it to import author as foreign keys, and because an author has many publishers, it makes sense for it to import publishers as foreign keys.

var sqlPublisherGenreSchema =  Schemas.OPTION_3; // TODO: Update this constant
// We use the concept of foreign keys to import from foreign tables.
// Because a genre has many publishers, it makes sense for it to import publisher as foreign keys, but because a publisher only has one genre, it DOES NOT makes sense for it to import genres as foreign keys.

var sqlAuthorGenreSchema =  Schemas.OPTION_5; // TODO: Update this constant
// Same idea as sqlPublisherAuthorSchema.

// Note that option 6 can never be a good design choice for any of these questions because an entity named "author_genre" or "publisher_genre" etc doesn't exist. Rather. only entities named author, publisher and genre exist.
// We want to illustrate their relationships using foreign keys, rather than creating new entities that inherit from them.
