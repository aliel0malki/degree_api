import { degapi } from "degree_api";

const URL = "https://jsonplaceholder.typicode.com/todos";

degapi.NewGet(URL, "3");
degapi.OldGet(URL);
