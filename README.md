# 'Clean Code' Cat Diary

A tiny piece of an imaginary cat diary app, created as an example
of code that could be cleaner.

## Cat Diary

Imagine a web site where cats can write diary entries. They can mark other cats for whom they have high regard as friends. They can create diary entries that are private, public, or visible only to friends.

This site values privacy, so cats can block other cats. They can also hide whether they consider other cats friends.

Cats can search all the diary entries visible to them.

(this repo only contains code snippets from this cat-diary domain. It is for running a short workshop on clean code.)

## Why clean code?

To change code, we need to understand it.
To understand it, we need to be able to read it and see what it's doing.

There is no universal "readable" code. It depends who is reading it, and how much they already know.

There are some heuristics that move almost any code toward "cleaner."

Today, we will talk about a few of them.

1. Accurate naming, and more naming
2. A single level of abstraction per function or method
3. Data-in, data-out functions

## What is "clean enough"?

- you can understand the code
- you can test the code
- your teammates can understand it pretty quickly
- and their initial understanding is correct. there are no surprises lurking (like db access, global state changes)

