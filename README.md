# Serverless Testing Examples

[ ![Codeship Status for didil/serverless-testing-examples](https://app.codeship.com/projects/19935a10-6b14-0136-e048-5a63a4ca7788/status?branch=master)](https://app.codeship.com/projects/298157)

This repository illustrates some strategies to test apps built using [Serverless framework](https://github.com/serverless/serverless).

I've published an article about this on Medium: [Serverless Testing Strategies](https://medium.com/@didil/serverless-testing-strategies-393bffb0eef8)


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

## Running locally
- Start serverless offline
````
$ sls offline
````
- Send an http request with [httpie](https://httpie.org/)
````
$ http :3000/asyncConcat a==foo b==bar

HTTP/1.1 200 OK
Connection: keep-alive
Date: Mon, 16 Jul 2018 12:20:24 GMT
Transfer-Encoding: chunked
access-control-allow-credentials: true
access-control-allow-origin: *
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: origin,accept-encoding

{
    "result": "foo bar"
}



````


## Contributions

If you would like to contribute to this repo and share some interesting test scenarios/usages with the serverless community, please feel free to open a PR !

You can reach me on Twitter: [@le_didil](https://twitter.com/le_didil)