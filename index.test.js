const ardoq = require('./ardoq');
const process = require('process');
const cp = require('child_process');
const path = require('path');

test('throws invalid number', async () => {
  await expect(ardoq(null, 'foo')).rejects.toThrow('Missing authentication token');
});

test('invalid operation', async () => {
  await expect(ardoq('dummy-token', 'invalid-operation')).rejects.toThrow('Unknown operation: invalid-operation');
});

test('get-workspaces', async () => {
  ardoq('dummy-token', 'get-workspaces')
      .then(result =>
          expect(result).toBe('get-workspaces')
      );
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = 100;
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  console.log(result);
})
