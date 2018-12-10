# API Response

The API Response gives a standardized way to return a response from an express API. 

# Installation

`npm install --save @sredmond/apiresponse`

This was orinally written with TypeScript, so you do not need to install additional types if you're also using TypeScript.

# Usage

To send back an APIResponse you pass in an `IAPIParams` interface when creating a new APIResponse, which looks like this:

```javascript
{
  success: boolean;
  body?: any;
  status?: Status;
}
```

The only required field is the success field.

A code and message will be created based off of the status, which if none is passed in, will default to 200 (regardless of success being true or false). If you want to return a status of anything other than 200 you must specify it when passing in the `IAPIParams` (See below about Codes / Messages).

When you use the `Send` method of the APIResponse class you must pass in an express Response object. 

```javascript
return new APIResponse({ success: true}).Send(res);
```

You can also, optionally pass in a custom message (See below about Codes / Messages)

## Basic Usage

```javascript
import { APIResponse } from '@sredmond/apiresponse';

app.get('/path', (req: express.Request, res: express.Response) => {
  try {
    return new APIResponse({ success: true, body: { userid: 1, username: 'jdoe' } }).Send(res);
  } catch (e) {
    return new APIResponse({ success: false, status: 500, body: e }).Send(res);
  }
});
```

A successful response with a status of 200 will return:

```json
{
  "message": { "code": "request/success", "message": "Your request was made successfully" },
  "success": true,
  "body": { "userid": 1, "username": "jdoe" }
}
```

# Usage Variations

1. Just send back a success response (no body)

```javascript
return new APIResponse({ success: true }).Send(res);
```

This will send the following:

```json
{
  "message": { "code": "request/success", "message": "Your request was made successfully" },
  "success": true
}
```

2. Send a success back with a body

```javascript
return new APIResponse({ success: true, body: { userid: 1, username: 'jdoe' } }).Send(res);
```

This will return the following:

```json
{
  "message": { "code": "request/success", "message": "Your request was made successfully" },
  "success": true,
  "body": { "userid": 1, "username": "jdoe" }
}
```

3. Send a response with a custom message

```javascript
return new APIResponse({success: true}).Send(res {code: 'my/code', message: 'Enter a custom message to send back to the user'});
```

This will return the following:

```json
{
  "message": { "code": "my/code", "message": "Enter a custom message to send back to the user" },
  "success": true
}
```

# Codes / Messages

These codes and messages are hard-coded, future releases will allow you to customize these a little.

If you want access to these codes in your project you can import them like so:

```javascript
import { Codes } from '@sredmond/apiresponse';

const successCode = Codes[200];
```

The numbered HTTP statuses are also caputred in a custom type called Status which you can import like so:

```javascript
import { Status } from '@sredmond/apiresponse';
```

The status types simply represents all the numbered HTTP response codes featured below.

- 100: `{ code: 'api/continue', message: 'Continue sending the request body' }`
- 101: `{ code: 'api/switch-protocol', message: 'Switching Protocols' }`
- 100: `{ code: 'api/continue', message: 'Continue sending the request body' }`
- 101: `{ code: 'api/switch-protocol', message: 'Switching Protocols' }`
- 102: `{ code: 'api/processing', message: 'WEBDAV - Processing request' }`
- 103: `{ code: 'api/early-hints', message: 'HTTP headers returned' }`
- 200: `{code: 'request/success',message: 'Your request was made successfully'}`
- 201: `{ code: 'api/created', message: 'The request has been fulfilled' }`
- 202: `{ code: 'api/accepted', message: 'Request accepted for processing' }`
- 203: `{ code: 'proxy/non-authoritative-info', message: 'Proxy request was successful - returning modified response' }`
- 204:`{ code: 'api/no-content', message: 'Request was processed successfully, but no content has been returned' }`
- 205: `{ code: 'api/reset-content', message: 'Request was processed successfully, but no content has been returned' }`
- 206: `{ code: 'api/partial-content', message: 'Request was processed successfully, returning partial content' }`
- 207: `{ code: 'api/multi-status', message: 'WEBDAV - Returning XML message containing multiple requests' }`
- 208: `{code: 'api/already-reported',message: 'WEBDAV - Members of DAV binding have been enumerated, these will not be included again'}`
- 218: `{ code: 'request/fine', message: 'This is fine' }`
- 226: `{ code: 'api/IM-used', message: 'Request processed successfully - returning manipulation applied to current instance' }`
- 300: `{ code: 'api/multiple-choices', message: 'Multiple choices available' }`
- 301: `{ code: 'resource/moved-permanently', message: 'The resources you are looking for have been permanently moved' }`
- 302: `{ code: 'resource/found', message: 'Resource has been found, but was previously relocated' }`
- 303:`{ code: 'api/see-other', message: 'You can find the response to this request at an alternate URL' }`
- 304: `{ code: 'resource/not-modified', message: 'The resource has not been modified since the specified version' }`
- 305: `{ code: 'resource/use-proxy', message: 'To access this resource you must use a proxy' }`
- 306: `{ code: 'request/switch-proxy', message: 'All subsequent requests should use a proxy' }`
- 307: `{ code: 'request/temporary-redirect', message: 'This request will temporarily be found at a different URL' }`
- 308: `{ code: 'request/permanent-redirect', message: 'This request will be permanently moved in the future' }`
- 400: `{ code: 'request/invalid', message: 'Invalid Request. Review your request and try again' }`
- 401: `{ code: 'request/unauthorized', message: 'You are not authorized to access this route' }`
- 402: `{ code: 'request/payment-required', message: 'In order to continue making requests please submit payment' }`
- 403: `{ code: 'request/forbidden', message: 'You are forbidden from accessing this route' }`
- 404: `{ code: 'resource/not-found', message: 'We could not find the specified resource' }`
- 405: `{ code: 'request/method-not-allowed', message: 'The HTTP request you are making is not allowed for this route' }`
- 406: `{ code: 'api/not-acceptable', message: 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request' }`
- 407: `{ code: 'proxy/authentication-required', message: 'Please authenticate yourself to the proxy' }`
- 408: `{ code: 'request/timeout', message: 'Your request has timed out' }`
- 409: `{ code: 'resource/conflict', message: 'There is a conflict in the current resource that is preventing us from completing your request at this time' }`
- 410: `{ code: 'resource/gone', message: 'The requested resource in no longer available' }`
- 411: `{ code: 'request/length-required', message: "Your request did not specify the length of it's content, which is required for this route" }`
- 412: `{ code: 'request/precondition-failed', message: 'Our server does not meet one of the preconditions of your request' }`
- 413:`{ code: 'request/payload-too-large', message: 'Your request is larger than our server is willing to process' }`
- 414: `{ code: 'request/uri-too-long', message: 'The URI is too long for this request' }`
- 415: `{ code: 'request/unsupported-media', message: 'Our server does not currently support the requested media type' }`
- 416: `{ code: 'request/range-not-satisfiable', message: 'We cannot return the requested file range' }`
- 417: `{ code: 'request/expectation-failed', message: 'Our server cannot meet the requirements of your Expect header' }`
- 418: `{ code: 'api/teapot', message: "I'm a little teapot." }`
- 419: `{ code: 'page/expired', message: 'The current page has expired' }`
- 420: `{ code: 'api/failure', message: 'Please remain calm while we try to figure out your request' }`
- 421: `{ code: 'request/misdirected', message: 'The server you have requested cannot produce a response' }`
- 422:`{ code: 'request/unprocessable-entity', message: 'WEBDAV - We could not complete your request due to semantic errors' }`
- 423: `{ code: 'resource/locked', message: 'WEBDAV - The current resource you are requesting is locked ' }`
- 424: `{ code: 'request/failed-dependency', message: 'WEBDAV - This request was dependent on another request and that request failed' }`
- 426: `{ code: 'request/upgrade-required', message: 'In order to complete your request you must upgrade your request protocol' }`
- 428: `{ code: 'request/precondition-required', message: 'The origin server requires the request to be conditional' }`
- 429: `{ code: 'request/too-many-requests', message: 'You have sent too many requests at once' }`
- 431: `{ code: 'request/header-field-too-large', message: 'Your header fields are too long to complete this request' }`
- 440: `{ code: 'iis/session-time-out', message: 'Your session has expired and you must login again' }`
- 444: `{ code: 'nginx/no-response', message: 'No information could be returned, and your connection will be closed' }`
- 449: `{ code: 'iis/retry', message: 'Please supply the server with the required information in order to complete this request' }`
- 450: `{ code: 'windows/blocked', message: 'This request has been blocked by Windows Parental Control' }`
- 451: `{ code: 'legal/unavailable', message: 'The request cannot be completed due to legal reasons' }`
- 494: `{ code: 'nginx/header-too-large', message: 'Your request header was too large' }`
- 495: `{ code: 'nginx/ssl-error', message: 'The client has provided an invalid SSL certificate' }`
- 496: `{ code: 'nginx/ssl-required', message: 'You must provide an SSL certificate in order to complete this request' }`
- 497: `{ code: 'nginx/http-https', message: 'An HTTP request has been made to a port listening for HTTPS' }`
- 498: `{ code: 'token/invalid', message: 'Your token is either expired or invalid' }`
- 499: `{ code: 'token/reqired', message: 'A token is request to complete your request' }`
- 500: `{ code: 'api/error', message: 'Internal Server Error. Please try again later' }`
- 501: `{ code: 'request/not-implemented', message: 'Your request cannot be completed because it is not recognized' }`
- 502: `{ code: 'gateway/bad-gateway', message: 'The request received an invalid response from the upstream server' }`
- 503: `{ code: 'api/unavailable', message: 'This service is currently unavailable, please check back later' }`
- 504: `{ code: 'gateway/timeout', message: 'The gateway has timed out' }`
- 505:`{ code: 'request/version-not-supported', message: 'Your request cannot be completed because your version of HTTP is unsupported' }`
- 506: `{ code: 'api/variant-also-negotiates', message: 'Transparent content negotiaton for the request has resulted in a circular reference' }`
- 507: `{ code: 'api/insufficient-storage', message: 'WEBDAV - The server is unable to store the representation needed to complete your request' }`
- 508:`{ code: 'request/loop-detected', message: 'WEBDAV - The server has detected an infinite loop while processing your request' }`
- 509: `{ code: 'request/limit-exceeded', message: 'The server has exceeded the bandwidth specified by the server administrator' }`
- 510: `{ code: 'request/not-extended', message: 'Further extensions to your request are required to complete your request' }`
- 511: `{ code: 'network/authentication-required', message: 'In order to access this resource you must be authenticated on the network' }`
- 520: `{ code: 'cloudflare/unknown', message: 'An unknown error has occurred, the origin server has returned something unexpected' }`
- 521:`{ code: 'cloudflare/server-down', message: 'The origin server has refused connection' }`
- 522: `{ code: 'cloudflare/connection-timeout', message: 'The connection to the origin server has timed out' }`
- 523: `{ code: 'cloudflare/origin-unreachable', message: 'The origin server is unreachable' }`
- 524: `{ code: 'cloudflare/timeout', message: 'A connection to the origin server was made but a response was not timely' }`
- 525: `{ code: 'cloudflare/ssl-handshake-failure', message: 'The SSL/TLS handshake could not be completed to the origin webserver' }`
- 526: `{ code: 'certificate/invalid', message: 'The SSL certificate of the resource could not be verified' }`
- 527: `{ code: 'cloudflare/railgun-error', message: 'A request has timed out or failed after WAN connection has been established' }`
- 530: `{ code: 'request/frozen', message: 'The requested site is frozen' }`
- 598: `{ code: 'network/read-timeout', message: 'A network timeout occurred' }`
