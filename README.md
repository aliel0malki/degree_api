# degree_api ts
from Ali El0malki
```
Beta version 0.9.0
```

## What is degree_api?
Simple Functionality to REQUEST Data from any API, using TypeScript.

## What is API?
API is the acronym for application programming interface — a software intermediary that allows two applications to talk to each other.
APIs are an accessible way to extract and share data within and across organizations.
APIs are all around us. 
Every time you use a rideshare app, send a mobile payment, or change the thermostat temperature from your phone, you’re using an API.

## Why use degree_api?
one line to request api and catch errors, 
with high performance.
## How i am add degree_api to my project?
add the package using npm!

```nodejs
npm i degree_api
```

## How use degree_api?

```typescript

// -- import degree_api -- //
import { getRequest } from "degree_api";

// -- API URL [ Variable ] -- //
const URL_API = "API_KEY_HERE";

// -- Using degree_api in Project -- //
getRequest(URL_API);


// -- Result -- //

// if => True => Congrats! Your response Here 👏 //
// if => False => The cause of the error will appear Here. //

```
