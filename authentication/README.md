## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords

If the database is leaked, so are all the passwords.
People often reuse passwords on other sites so this would compromise those accounts too.

- Encrypted passwords

If the encryption algorithm is known, the encryption can be reversed.
There can be weaknesses discovered with the encryption algorithm that is used (e.g., collisions).

- Hashed passwords

A rainbow table could be used to decrypt or identify popular passwords.
Flaws in hashing algorithms could also be discovered.
It can be difficult to make the salt random.