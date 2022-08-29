const core = require('@actions/core');
const github = require('@actions/github');
const { default: assetsChecker } = require('./asset-checker');

const main = async () => {
    try {
      await assetsChecker();
    }catch (error) {
        core.setFailed(error.message);
    }
}

main();
