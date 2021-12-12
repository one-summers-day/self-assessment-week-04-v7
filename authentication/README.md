## Authentication
Explain why each system fails, and how to guard against that failure:

- Plaintext passwords
`A plain text password is a way of writing (and sending) a password in a clear, readable format. Such password is not encrypted and can be easily read by other humans and machines. Anyone can gain access to your systems.`

- Encrypted passwords
`Encryption algorithms take input and a secret key and generate a random looking output called a ciphertext. This operation is reversible. Anyone who knows or obtains the secret key can decrypt the ciphertext and read the original input.`

- Hashed passwords
`Hashing functions are not reversible. The output of a hashing function is a fixed-length string of characters called a hash value, digest or simply a hash. These are not necessarily intended to be kept secret because they cannot be converted back into their original values. However, one important property of a hashing function is that when hashed, a unique input must always result in the same hash value.`

