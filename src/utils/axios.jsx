import axios, { Axios } from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmEwMTMxZDU4YmY2MDJjZTdlZWY3ODM1ZWUxMTMzOSIsIm5iZiI6MTcyNjA0NzQ5MS42NjUwMzksInN1YiI6IjY2ZTE1MGJmMzk2ODYxOWVmODA1MTU4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2bpoYU2Ktdi3zuqLnpt62savvhnkwEFc4Hj6Chb7ZXA",
  },
});

export default instance;
