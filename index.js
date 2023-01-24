const core = require('@actions/core');
const wait = require('./ardoq');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ardoqToken = core.getInput('ardoq-token');
    core.setSecret('ardoq-token');
    const operation = core.getInput('operation');

    const result = {};
    result.operation = operation;

    core.setOutput('result', JSON.stringify(result));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
