# Serverless Testing Examples

[ ![Codeship Status for didil/serverless-testing-examples](https://app.codeship.com/projects/19935a10-6b14-0136-e048-5a63a4ca7788/status?branch=master)](https://app.codeship.com/projects/298157)

This repository illustrates some strategies to test apps built using [Serverless framework](https://github.com/serverless/serverless).
I've published an article about this here: [Serverless Testing Strategies]()


## Setup

- Install Node 8.10 (latest runtime supported by AWS Lambda)

- Install serverless (tested against serverless v1.28.0)
````
$ npm i -g serverless 
````
- Install node modules
````
$ npm i 
````
- Initialize env variables file
````
$ touch env.yml 
````
- Run tests
````
$ npm test
````

## Contributions

If you would like to contribute to this repo and share some interesting test scenarios/usages with the serverless community, please feel free to open a PR !