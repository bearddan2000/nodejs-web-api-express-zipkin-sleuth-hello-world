const express = require('express');
const app = express();
var router = express.Router();

// Import zipkin stuff
const { Tracer, ExplicitContext, BatchRecorder, jsonEncoder } = require("zipkin");
const { HttpLogger } = require("zipkin-transport-http");
const zipkinMiddleware = require("zipkin-instrumentation-express").expressMiddleware;

const ZIPKIN_ENDPOINT = process.env.ZIPKIN_ENDPOINT || "http://zipkin-srv:9411";

// Get ourselves a zipkin tracer
const tracer = new Tracer({
  ctxImpl: new ExplicitContext(),
  recorder: new BatchRecorder({
    logger: new HttpLogger({
      endpoint: `${ZIPKIN_ENDPOINT}/api/v2/spans`,
      jsonEncoder: jsonEncoder.JSON_V2,
    }),
  }),
  localServiceName: "date-service",
});

const port = process.env.PORT || 8000;

// Add zipkin express middleware
app.use(zipkinMiddleware({ tracer }));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.listen(port, () => console.log(`Service listening on port ${port}`));
