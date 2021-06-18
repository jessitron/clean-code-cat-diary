# 'Clean Code' Cat Diary

A tiny piece of an imaginary cat diary app, created as an example
of code that could be cleaner.

## This wee workshop

0) Please clone this repository from public GitHub: https://github.com/jessitron/clean-code-cat-diary/
1) What is clean code? A few heuristics we will work on today
2) Look at a messy function together. Try to make it clearer
3) In 3 breakout groups, look at a smaller function and try to make it clearer.

## Why clean code?

To change code, we need to understand it.
To understand it, we need to be able to read it and see what it's doing.

There is no universal "readable" code. It depends who is reading it, and how much they already know.

There are some heuristics that move almost any code toward "cleaner."

Today, we will talk about a few of them.

1. **Accurate naming**, and more naming
2. A **single level of abstraction** per function or method
3. **Data-in, data-out** functions

## What is "clean enough"?

- you can understand the code
- you can test the code
- your teammates can understand it pretty quickly
- and their initial understanding is correct. there are no surprises lurking (like db access, global state changes)

## Cat Diary

![cat diary entries](docs/cat-diary.jpg)

Imagine a web site where cats can write diary entries. They can mark other cats for whom they have high regard as friends. They can create diary entries that are private, public, or visible only to friends.

This site values privacy, so cats can block other cats. They can also hide whether they consider other cats friends.

Cats can search all the diary entries visible to them.

(this repo only contains code snippets from this cat-diary domain. It is for running a short workshop on clean code.)


## In Breakout Rooms

1) one person, either clone this repo or open it on GitHub: https://github.com/jessitron/clean-code-cat-diary
2) Each group, please open one file for editing:

group | file
-----|-----
 Group 1: | [src/messages.js](https://github.com/jessitron/clean-code-cat-diary/blob/main/src/messaging.js)
 Group 2: | [src/myEntries.js](https://github.com/jessitron/clean-code-cat-diary/blob/main/src/myEntries.js)
Group 3: | [src/friends.js](https://github.com/jessitron/clean-code-cat-diary/blob/main/src/friends.js)

3) Try to make the code more readable. Don't worry if your syntax isn't quite valid.