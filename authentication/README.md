## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords

Hackers or packet sniffers can see plain text passwords through network data or through data breaches, meaning this data should be encrypted

- Encrypted passwords

If you figure out the decryption protocol for one password (or enough passwords given a sample size larger than 1), you can easily figure out the rest of the pattern for how data is encrypted. Also, encrypted files can be large and not easy to store. Therefore a different set of data should be created thats easier to encrypt and store. And that's why we use...

- Hashed passwords

It provides a one way, deterministic method of turning some type of data, usually a string, into a fixed length output. This can then be stored and, at time of retrieval, can be compared to the entered password (by hashing it at time of entry) and see if the hashes match. That way, hashes can be stored on the server and if uncovered, won't contain compromising data.


