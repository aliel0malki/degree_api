# degree_api

[![npm](https://img.shields.io/badge/npm-blue?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/degree_api?activeTab=readme)
[![Twitter URL](https://img.shields.io/twitter/url?color=666&logo=twitter&style=for-the-badge&url=https%3A%2F%2Ftwitter.com%2Faliel0malki%3Ft%3DGpIJ1YLwaa3Dj5VpcDpW6A%26s%3D09)](https://twitter.com/aliel0malki?t=xkfJhJ-N5ZXKL5ENzzDi2Q&s=09)
[![Discord](https://img.shields.io/discord/1079895028907900998?color=blue&logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/pHJABSwkZ3)
[![NPM](https://img.shields.io/npm/l/degree_api?color=blue&logo=github&style=for-the-badge)]()
[![npm](https://img.shields.io/npm/v/degree_api?color=blue&label=Version&logo=npm&style=for-the-badge)]()
[![npm](https://img.shields.io/npm/dw/degree_api?color=blue&logo=npm&style=for-the-badge)]()
[![GitHub Repo stars](https://img.shields.io/github/stars/aliel0malki/degree_api?color=blue&logo=github&style=for-the-badge)]()

<h2></h2>

![٢٠٢٣٠٣٠٢_٠١٤٠١٢](https://user-images.githubusercontent.com/124408599/222292000-04aec507-577d-4ec9-9ddd-f6bb1fa046c8.png)

<!-- ![٢٠٢٣٠٢٢٧_٢٣١٩٢٢](https://user-images.githubusercontent.com/124408599/221688033-01933866-022d-460a-a3ac-1b6afb22c14b.png) -->

## ✴️ TypeScript Only

From ```Ali El0malki```

```
Official version 0.11.0 
```

## Features I work on! 
- ✅️ Change the Program to OOP.
- ✅️ add New Method to REQUEST.
- ✅️ add Paramas to Request URL [New Method].
- ✅️ Update performance.
- ✅️ Fixed Bugs.
- ❌️ add POST Method.
- ❌️ add PUT Method.
- ❌️ add DELETE Method.

## What is degree_api 🤔
Simple Functionality to REQUEST Data from any API in TypeScript.

## What is API ?
API is the acronym for application programming interface — a software intermediary that allows two applications to talk to each other.
APIs are an accessible way to extract and share data within and across organizations.
APIs are all around us. 
Every time you use a rideshare app, send a mobile payment, or change the thermostat temperature from your phone, you’re using an API.

## Why use degree_api 🤔
one line to request api and catch errors, 
with high performance.

## What changes v0.11.0 ?
-- Changes in v0.11.0 :
- ✅️ Change the Program to OOP.
- ✅️ add New Method to REQUEST.
- ✅️ add Paramas to Request URL [New Method].
- ✅️ Update performance.
- ✅️ Fixed Bugs.

## add degree_api to my project 🤔
add the package using npm!

```
npm i degree_api
```

## How use New Method ?

```typescript

// -- import degree_api -- //
import { degapi } from "degree_api";

// -- API URL [ Variable ] -- //
const API_URL = "API_URL_HERE";

// -- Using New Method without [Params] in Project -- //
degapi.nGet(URL_API);

// -- Using New Method with [Params] in Project -- //
degapi.nGet(URL_API, <Your_Param>);


// -- Output -- //

// if => True => Congrats! Your response Here 👏 //
// if => False => The cause of the error will appear Here. //

```

## Example with <a href="https://jsonplaceholder.typicode.com">JsonPlaceholder</a> API ..

```typescript

// -- import degree_api -- //
import { degapi } from "degree_api";

// -- API URL [ Variable ] -- //
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// -- Search in Todos using ID -- //

// -- Using New Method with [Param] in Project -- //
degapi.nGet(URL_API, "1");

```

```typescript
// -- Output -- //
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
```

## use Old Method ?

```typescript

// -- import degree_api -- //
import { degapi } from "degree_api";

// -- API URL [ Variable ] -- //
const API_URL = "API_URL_HERE";

// -- Using OldGetRequest in Project -- //
degapi.oGet(URL_API);


// -- Output -- //

// if => True => Congrats! Your response Here 👏 //
// if => False => The cause of the error will appear Here. //

```
## Other things
- **Have a problem or Bugs 🤔**

    send on **<a href="https://github.com/aliel0malki/degree_api/issues" >issues</a>**.

- **Have thing to help me 🤔**

    send on **<a href="https://github.com/aliel0malki/degree_api/pulls" >pull request</a>**.

## End The Readme
If you would like to support me,
and make me continue to publish and develop.
Please ```Star``` The Repository.

Thank You 😊
