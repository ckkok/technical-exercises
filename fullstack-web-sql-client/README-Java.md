# Java EE Technical Assessment - Database Client

## Duration
The duration of this assessment is *3 days*.

## Assessment Goals
To assess the candidate's ability to:

1. build a server application using core Java EE as far as possible.
2. write clean and organized code.
3. design and write relevant unit tests.
4. handle errors/exceptions appropriately.
5. write concise and useful documentation.

## Requirements
For this assessment, you are *not* to use web frameworks (e.g. Spring) or ORMs (e.g. Hibernate). However, you may import relevant single purpose dependencies, and you may use either JUnit or TestNG for unit tests. You may use either Maven or Gradle to build your application. There are no restrictions on the stack to be used for the application's front-end, though its user interface should not be a hindrance to using the application.

## Application Specifications
You will need to build an application that allows the user to execute database queries, and displays the results of the queries in an appropriate manner. The size of the database is unknown. The application should:

1. be a single-page application that allows the user to type in queries directly and executes them on the server.
2. displays the results of the queries on the same page.
3. only allow a specified number users to be connected at the same time, e.g. via an environment variable or command-line argument.

Explain in a readme file how to build, deploy and use your application, along with any limitations and issues. Push your code and documentation to a git repository and add [kok.chee.kean@outlook.com](kok.chee.kean@outlook.com) as a collaborator once you are satisfied that your work is production-ready.

### Remarks
Feel free to add optional meaningful features to your application as long as the above requirements are met.