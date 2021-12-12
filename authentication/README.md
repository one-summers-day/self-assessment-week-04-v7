## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords
Plain text can be read by anyone accessing the system, and an exposed password is sufficient to hack the user. Should be hashed or encrypted.

- Encrypted passwords
If the encryption key is exposed then you have problems. Guard your encryption key well.

- Hashed passwords
Passwords aren't typically random and a common list of passwords can be used to detect the hash, I think. Random passwords is the solution.
