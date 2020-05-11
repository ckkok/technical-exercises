# Java Technical Assessment - Spring Boot Microservices Architecture

## Objectives

This exercise allows a candidate to demonstrate the following competencies:

1.  Distributed application design
2.  Enterprise application design patterns
2.  Knowledge of modern Java best practices (i.e. Java 8 and above)
4.  Knowledge of the Spring framework and ecosystem
3.  Writing of clean code
4.  Software testing
5.  Project management

We do not expect a completely robust solution, and the scope of the exercise is designed to include ambiguity and edge cases. We are looking for the candidate's ability to manage these ambiguities and edge cases through tests, documentation, and good programming practices (e.g. proper exception-handling).

In particular, for the purpose of this exercise, documentation of the rationale behind design decisions is of paramount importance.

## Exercise Requirements

Use the Spring Initializer to create a Spring Boot project. You may use any dependency of your choice from the Spring ecosystem.

The project should be a microservice or a suite of microservices (e.g. a multimodule Maven project) that meets the following requirements:

0.  Java 8 and above should be used for this project.

1.  Accepts a POST request with "application/json" as the request's content-type. 
  - The body of the request will be a JSON object containing the fields "name" and "request".
    - For example: `{"name": "Tom", "request": "Price of oil"}`
  - The response should be a JSON object containing the fields "response", "timestamp", and "processingTime".
    - For example: `{"response": "USD40 per barrel", "timestamp": "2019-07-01 12:35:05 GMT", "processingTime": 348}`

2.  The "request" field consists of a short phrase asking for either the price or available volume of oil, gas, or coffee beans.
  - You may not assume that the phrase conforms to any format. For example, the request could just as easily be "what's the oil price now?" or "gas volume available please".

3.  The required data (price / available volume of oil / gas / coffee beans) is to be fetched from an external API. This data is updated every minute.
  - This is simulated by the provided NodeJS application, i.e. you will need NodeJS installed on your system for this to work.
  - Run `npm install` to install the required NodeJS dependencies.
  - Run `npm start` to start the service.
  - The required data can be fetched from `http://localhost:5000/oil`, `http://localhost:5000/gas`, and `http://localhost:5000/coffee`.
  - This server will only accept 10 concurrent requests, and has a simulated latency per request.
  - You should not edit the code in the `index.js` file.

4.  Your project should be designed to serve a reasonable volume of requests concurrently without any loss of performance, and allow for a distributed architecture. For example, your application may need to run on several instances behind a load balancer. What restrictions might that place on your application design?

5.  Push your code and documentation to a git repository and add [kok.chee.kean@outlook.com](kok.chee.kean@outlook.com) as a collaborator.

## Stretch goal(s)

The following are optional features that allow you to demonstrate further web application design competencies. Attempt them only if the above requirements have been met.

1. Ensure that each request will only be served if the caller has said "hello" first, i.e. sending "price of oil" as an initial request will result in a rejection message, e.g. "It is rude to ask for service without a proper greeting!".

2. Secure your POST endpoint.

3. Enhance the UX by allowing your application to request for missing data. For example, the request / response chain could look like the following:
  - `{"name": "Tom", "request": "price"}`
  - `{"response": "price of what commodity?", "timestamp": "2019-07-01 12:35:05 GMT", "processingTime": 128}`
  - `{"name": "Tom", "request": "oil"}`
  - `{"response": "USD40 per barrel", "timestamp": "2019-07-01 12:37:12 GMT", "processingTime": 348}`