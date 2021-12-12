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
//many to many relationship needs a associate? helper? table.

var sqlPublisherGenreSchema =  Schemas.OPTION_4;
// since we ahve one to many relationship where genre is the one and publishers is the many, we want the foreign key of the one to live inside the many table.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; 
// many to many relationship between author and genre. aagain same reaso nas publisher-author relaitonship
