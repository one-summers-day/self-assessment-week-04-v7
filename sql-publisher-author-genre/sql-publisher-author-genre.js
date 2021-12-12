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
// TODO: Given that Publishers and Authors have a many-to-many relationship, the best schema would involve a join table. The only option that includes a join table is Option 6, and so that's why I've made that choice.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Genres have a one-to-many relationship with publishers, such that a publisher should have just one genre in its row. Option 4 accomplishes this while also allowing the same genre id to appear multiple times (paired with any number of publishers), and thus maintaining that one-to-many relation.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Similar to the first schema, Authors and Genres have a many-to-many relationship, which is usually best represented by a join table. Thus for this, too, option 6 would be the best schema to choose.
