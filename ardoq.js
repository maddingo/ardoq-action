let ardoq = function (ardoqToken, operation) {
  return new Promise((resolve) => {
    if (typeof ardoqToken !== 'string' || ardoqToken.trim().length === 0) {
      throw new Error('Missing authentication token');
    }

    switch (operation) {
      case 'get-workspaces':
            resolve('get-workspaces');
            break;
      default:
        throw new Error('Unknown operation: ' + operation);
        break;
    }
  });
};

module.exports = ardoq;
