## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords
If you can read it, you can just take it I guess. Hash, encrypt, do anything to make it more secure.

- Encrypted passwords
Still contains 1 to 1 information about the input password. Can be broken with sufficient cryptographic comptuing. Hashing is lossy and can't be reasonably broken without access to the hashing algorithm.

- Hashed passwords
Hashed passwords can be 'reverse engineered' if sufficient data about that hash system/hashing algo is found. IE enough plaintext passwords and their corresponding hashes are found.
A fix for this is to use password salting, which further scrambles the hash so that the initial input cannot be guessed.
