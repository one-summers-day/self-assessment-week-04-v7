## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords
  - An attacker could gain access to all username/password combos if they were able to get access to the database
  - Password reuse is common, which exacerbates the problem - the attacker might be able to gain access to a bunch of other accounts owned by people who are reusing their passwords just by getting access to your database (this applies across all three systems)
  - You can guard against this by implementing a hashed password with salt

- Encrypted passwords
  - An attacker may be able to use a rainbow list to reverse engineer the encryption and be able to use this to get access to all the passwords in the database
  - Depending on your encryption method, attackers may be able to get information about the passwords (e.g., length), that will help them reverse engineer your encryption method
  - You can guard against this by implementing a hashed password with salt

- Hashed passwords
  - Because there are only a few hashing algorithms that are widely used, an attacker may be able to run through these to obtain the plaintext passwords
  - An attacker may also be able to use a rainbow list to help figure out which hashing algorithm is being used
  - You can guard against this by adding a salt, a randomly generated sequence of characters, before the plaintext passowrd before hashing
