import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "1m", target: 10 },
    { duration: "3m", target: 10 },
    { duration: "1m", target: 50 },
    { duration: "3m", target: 50 },
    { duration: "1m", target: 100 },
    { duration: "3m", target: 100 },
    { duration: "1m", target: 200 },
    { duration: "3m", target: 200 },
    { duration: "1m", target: 300 },
    { duration: "3m", target: 300 },
    { duration: "2m", target: 0 },
  ],
};

const BASE_URL = "http://localhost:8000";

export default function () {
  const url = `${BASE_URL}/random-number/2`;

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  http.get(url, params);
  sleep(0.5);
}
