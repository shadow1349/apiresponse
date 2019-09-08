import { expect } from 'chai';
import 'mocha';
import APIResponse from './APIResponse';
import { Codes } from './Codes';

describe('Successful API Response', () => {
  const response = new APIResponse({ success: true });

  it('status should be 200', () => {
    expect(response.status).to.equal(200);
  });

  it('message should be 200 message', () => {
    expect(response.message).to.equal(Codes[200]);
  });

  it('success should be true', () => {
    expect(response.success).to.equal(true);
  });

  it('body should be undefined', () => {
    expect(response.body).to.undefined;
  });
});

describe('Failed API Response', () => {
  const response = new APIResponse({ success: false, status: 500 });

  it('status should be 500', () => {
    expect(response.status).to.equal(500);
  });

  it('message should be a 500 message', () => {
    expect(response.message).to.equal(Codes[500]);
  });

  it('success should be false', () => {
    expect(response.success).to.equal(false);
  });

  it('body should be undefined', () => {
    expect(response.body).to.undefined;
  });
});

describe('Failed API Response Returning 200', () => {
  const response = new APIResponse({ success: false });

  it('status should be 200', () => {
    expect(response.status).to.equal(200);
  });

  it('message should be 200 message', () => {
    expect(response.message).to.equal(Codes[200]);
  });

  it('success should be false', () => {
    expect(response.success).to.equal(false);
  });

  it('body should be undefined', () => {
    expect(response.body).to.undefined;
  });
});

describe('API Response', () => {
  const response = new APIResponse({ success: true, body: [{ id: 1 }, { id: 2 }] });

  it('status should be 200', () => {
    expect(response.status).to.equal(200);
  });

  it('message should be 200 message', () => {
    expect(response.message).to.equal(Codes[200]);
  });

  it('success should be true', () => {
    expect(response.success).to.equal(true);
  });

  it('body should be an array', () => {
    expect(response.body).to.be.an('array');
  });
});
