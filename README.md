# nodejs-web-api-express-zipkin-sleuth-hello-world

## Description
Shows REST api metrics, timings and status code.

### STEP 1
Once the project is done building, make
some api calls `http://localhost`.

### STEP 2
- goto http://localhost:81
- click on "Find a trace"
  - search by "serviceName"

## Tech stack
- nodejs

## Docker stack
- node:latest
- openzipkin/zipkin

## To run
`sudo ./install.sh -u`
- API http://localhost
- ZIPKIN DASHBOARD http://localhost:81

## To stop
`sudo ./install.sh -d`

## For help
`sudo ./install.sh -h`

## Credit
- https://medium.com/trabe/tracing-express-services-with-zipkin-js-6e5c5680467e
