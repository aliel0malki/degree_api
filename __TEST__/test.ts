import { NewGetRequest } from "degree_api";

const URL =
    "http://api.weatherapi.com/v1/current.json?key=51f0fd2411f5487687095932230502&q=Marsa Matrouh&api=yes";

NewGetRequest(URL, "location");
