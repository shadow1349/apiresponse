/**
 * @type Status
 * @description Defines all the possible HTTP Status codes
 */
export type Status =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;

/**
 * @constant Codes
 * @description A list of messagees that will be configurable
 */
export const Codes = {
  100: { code: 'api/continue', message: 'Continue sending the request body.' },
  101: { code: 'api/switch-protocol', message: 'Switching Protocols' },
  102: { code: 'api/processing', message: 'WEBDAV - Processing request' },
  103: { code: 'api/early-hints', message: 'HTTP headers returned' },
  200: {
    code: 'auth/unauthorized',
    message: 'You are not authorized to access this route.'
  },
  201: { code: 'api/created', message: 'The request has been fulfilled.' },
  202: { code: 'api/accepted', message: 'Request accepted for processing' },
  203: { code: 'proxy/non-authoritative-info', message: 'Proxy request was successful - returning modified response' },
  204: { code: 'api/no-content', message: 'Request was processed successfully, but no content has been returned' },
  205: { code: 'api/reset-content', message: 'Request was processed successfully, but no content has been returned' },
  206: { code: 'api/partial-content', message: 'Request was processed successfully, returning partial content' },
  207: { code: 'api/multi-status', message: 'WEBDAV - Returning XML message containing multiple requests' },
  208: {
    code: 'api/already-reported',
    message: 'WEBDAV - Members of DAV binding have been enumerated, these will not be included again'
  },
  226: {
    code: 'api/IM-used',
    message: 'Request processed successfully - returning manipulation applied to current instance'
  },
  300: { code: 'api/multiple-choices', message: 'Multiple choices available' },
  301: { code: 'resource/moved-permanently', message: 'The resources you are looking for have been permanently moved' },
  302: { code: 'resource/found', message: 'Resource has been found, but was previously relocated' },
  303: { code: 'api/see-other', message: 'You can find the response to this request at an alternate URL' },
  304: { code: 'resource/not-modified', message: 'The resource has not been modified since the specified version' },
  305: { code: 'resource/use-proxy', message: 'To access this resource you must use a proxy' },
  306: { code: 'request/switch-proxy', message: 'All subsequent requests should use a proxy' },
  307: { code: 'request/temporary-redirect', message: 'This request will temporarily be found at a different URL' },
  308: { code: 'request/permanent-redirect', message: 'This request will be permanently moved in the future' },
  400: {
    code: 'request/invalid',
    message: 'Invalid Request. Review your request and try again.'
  },
  401: {
    code: 'request/unauthorized',
    message: 'You are not authorized to access this route.'
  },
  402: { code: 'request/payment-required', message: 'In order to continue making requests please submit payment' },
  403: {
    code: 'request/forbidden',
    message: 'You are forbidden from accessing this route'
  },
  404: { code: 'resource/not-found', message: 'We could not find the specified resource' },
  405: { code: 'request/method-not-allowed', message: 'The HTTP request you are making is not allowed for this route' },
  406: {
    code: 'api/not-acceptable',
    message:
      'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request'
  },
  407: { code: 'proxy/authentication-required', message: 'Please authenticate yourself to the proxy' },
  408: { code: 'request/timeout', message: '' },
  409: { code: 'api/conflict', message: '' },
  410: { code: 'api/gone', message: '' },
  411: { code: 'api/length-required', message: '' },
  412: { code: 'api/precondition-failed', message: '' },
  413: { code: 'api/payload-too-large', message: '' },
  414: { code: 'api/uri-too-long', message: '' },
  415: { code: 'media/unsupported', message: '' },
  416: { code: 'api/range-not-satisfiable', message: '' },
  417: { code: 'api/expectation-failed', message: '' },
  418: { code: 'api/teapot', message: "I'm a little teapot." },
  421: { code: 'request/misdirected', message: '' },
  422: { code: 'api/unprocessable-entity', message: '' },
  423: { code: 'api/locked', message: '' },
  424: { code: 'api/failed-dependency', message: '' },
  426: { code: 'api/upgrade-required', message: '' },
  428: { code: 'api/precondition-required', message: '' },
  429: { code: 'api/too-many-requests', message: '' },
  431: { code: 'request/header-field-too-large', message: '' },
  451: { code: 'legal/unavailable', message: '' },
  500: {
    code: 'api/error',
    message: 'Internal Server Error. Please try again later.'
  },
  501: { code: 'api/not-implemented', message: '' },
  502: { code: 'gateway/bad-gateway', message: '' },
  503: { code: 'api/unavailable', message: '' },
  504: { code: 'gateway/timeout', message: '' },
  505: { code: 'http/version-not-supported', message: '' },
  506: { code: 'api/variant-also-negotiates', message: '' },
  507: { code: 'api/insufficient-storage', message: '' },
  508: { code: 'api/loop-detected', message: '' },
  510: { code: 'api/not-extended', message: '' },
  511: { code: 'network/authentication-required', message: '' }
};
