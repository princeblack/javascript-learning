## Instructions for students:

### Find the Word

Create a program to search files for a word. The program should accept a word and a file path.

-   Make sure to create `index.js`, use `createReadStream` to read the `data.txt` file from this repository.

-   Make sure you separate the data in chunks, by default when you run the program to check the `data.txt` it should find the word `'localhost'`, and it should give you the amount of times that the word appears in that file. 

See following example:

```bash
$ node index.js
Reading chunk 1
Reading chunk 2
Reading chunk 3
Reading chunk 4
Reading chunk 5
Reading chunk 6
Reading chunk 7
Reading chunk 8
End of data
Number of chunks: 8
Found 'localhost' 1 times
```

-   The program should also be able to find any word that you pass as an argument. The output should look like the following example:

```bash
$ node index.js function
Reading chunk 1
Reading chunk 2
Reading chunk 3
Reading chunk 4
Reading chunk 5
Reading chunk 6
Reading chunk 7
Reading chunk 8
End of data
Number of chunks: 8
Found 'function' 8 times
```

-   The program should be able to find words from other files. If you pass the word to find as the first argument and the path to your file as a second argument on your program, the output will look like the following example: 

```bash
node index.js individual ../node-PrintKeyboard/README.md 
Open big file chunk by chunk and count a word
 
Reading chunk 1
End of data
Number of chunks: 1
Found 'individual' 1 times
```

**Bonus**

-   Run on your program with an empty string (`" "`) as the first argument. It should find the correct amount of times that a space appears on a file.

### Rules

-   This is an individual assignment.
-   Deadline: 45 minutes.
-   Use **Git properly**
