## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords
Plaintext passwords fail because if a malicious entity acquires access to the database, they have access to users' passwords.
One common safeguard against this concern is to encrypt passwords using some sort of encryption method at the server level
before placing the password in a database.
That way, if a malicious entity peeked into the database, there would be no passwords.
- Encrypted passwords
However, encryption isn't enough, because if that bad entity had a way to see the database, they'll likely be able to peek into the server as well and discern the encryption method. Once the method is known, it's trivial to decrypt the passwords and have access.
One way to safeguard against this is to use a hashing algorithm, which cannot be decrypted (as instead of decrypting a password
to ensure the user's entered password is correct, they rehash the entered password and compare it that way.)
- Hashed passwords
Hashing is deterministic, so it will always come out to a same result. Given that, imagine if a bad entity created a table of commonly used passwords, fed them into your server and database, and worked out what those common passwords hashed to? Then, they
would have access to those passwords.
The final safeguard, then, is to add a random 'salt' to the password as it's being hashed. This would be a random character string stored alongside the hashed password in the database. When the salt is concatenated with the password before hashing, whatever expected value a common password might result in would change to something much more random. In this way, the passwords would be secure.

