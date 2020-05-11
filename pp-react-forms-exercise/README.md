# Pair Programming Exercise - React Forms

## Assessment Objectives

This live coding pair programming session aims to determine a candidate's

- proficiency in using React and its UI libraries
- capacity to quickly get familiar with a framework and use it productively
- ability to communicate effectively with fellow team members
- proficiency in writing modular, well-organized, and reliable code

## Duration and Format

The maximum coding duration of this assessment is **1 hour**. During this time, the candidate is expected to drive the bulk of the development work and communicate with the assessor as a team-mate, while the assessor may prompt the candidate to look into issues. Indirect guidance may be provided by the assessor to a reasonable extent without impact on the assessment outcome. The candidate may refer to any online material if needed, but copying of code is prohibited.

## Requirements

A server has been set up at (https://live-pair-api.wekkit.now.sh/) that accepts POST requests at the root endpoint with content-type 'application/json' and the following fields (and types):

```
{
  firstName: String,
  lastName: String,
  dob: Date,
  gender: String,
  flavors: {
    chocolate: Boolean,
    vanilla: Boolean,
    strawberry: Boolean,
  },
}
```

Given the above expected payload, the field and type in the response of the server is:

```
{
  password: String
}
```

or, if there is an error, it will return with a 400 status code and the following:

```
{
  error: String
}
```

Design and create a web application using a React library [(Material UI)](https://material-ui.com/) that consists of a form. This form will make a call to the provided server and render a response on the page containing the returned password.
