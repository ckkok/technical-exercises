# High Capacity Data Aggregation - Senior Java Software Engineer Assignment

The duration of this assignment is 4 days.

## Objectives

The applicant should be able to:

1. Design and implement a high performance, resilient, and scalable Java web application for consuming and producing data
2. Write clean, reviewable code
3. Use git
4. Write clear and concise documentation


## Requirements

Assume that there are 2 sources of data for this assignment.
  - Source 1: Makes a POST request every 15 minutes with the following example JSON object at an endpoint of your choice
    - `{"source": "gitters", "updates": [], "timestamp": 1542912952203}`
      - The "updates" key contains an array of JSON objects, representing a batch of updates since the last POST request. There may be up to 100000 objects in this array at peak load. An example of such an object is as follows.
      - Example update: `{"name": "Bob", "git": "hello world!", "timestamp": 1542912641651}`
  - Source 2: Is unable to make a POST request, but responds to GET requests at `https://gitter.com:9000/` according to the following specification
    - Query parameters: start, end
      - Both parameters accept only datetimes of the format yyyyMMddhhmmss
    - Example: `https://gitter.com:9000/?start=20180101093000&end=20180101170000` produces data starting from 1 Jan 2018, 9:30am to 1 Jan 2018, 5pm
    - The response adheres to the following schema:
      - `{"status": "success", "updates": [], "timestamp": 1542912952203}`
      - The "updates" key contains an array of JSON objects identical to that from Source 1.
      - The "status" key may return a value of "failure" should the endpoint fail, in which case the "updates" key will have a value of null.
    - This source provides up to 1000 updates per hour.

1.  Design and implement an Actor/Service/Module that accepts the POST requests from source 1 and persists the data. 
2.  Design and implement an Actor/Service/Module that fetches the data from source 2, according to a schedule of your choice, and persists the data.
3.  Design and implement a REST endpoint that serves up the persisted data.
  - A user should be able to query the endpoint with the following parameters: start, end
    - Both parameters should accept only datetimes of the format yyyyMMddhhmmss
4.  Document how your application should be built, deployed, and accessed.
5.  Push your code to a git repository and add [kok.chee.kean@outlook.com](kok.chee.kean@outlook.com) as a collaborator.

## Notes

Although Akka or/and Spring is preferred, you may use other frameworks as necessary to implement your design.

We are looking out for solutions that pay particular attention to the following:

1. Concurrency and/or asynchronicity: How system resources are efficiently used to ensure responsiveness and maximum uptime. Computation should not hinder the response times of the server.
2. Testing: How the application is designed for testability and how the tests are designed for useful coverage
3. Resiliency: How the system handles, isolates, and reacts to failures
4. Security: How the system verifies and validates requests
5. Documentation: Your code or documentation should be able to communicate the business value of your design decisions where necessary.
