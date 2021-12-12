## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords
  If people with maliicious intent get access to the database, they can log into the system and also test that password on other systems. Use password hashing and salting to avoid this.

- Encrypted passwords
  If people with malicious intent get access to the encryption key and the database, they can decrypt all password in the database. Use password hashing and salt instead.

- Hashed passwords
  common hashing function can be figured out and use to guess password. Use salt to avoid repeating password hashes.
