const core = require('@actions/core');
const github = require('@actions/github');
const exec = require("@actions/exec");

const main = async () => {
    try {
      await exec.exec(`node ./asset-checker.js`);
    }catch (error) {
        core.setFailed(error.message);
    }
}

main();