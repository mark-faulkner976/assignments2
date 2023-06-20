module.exports = {
  setCustomDescriber() {
    return global.runCustomTestsOnly
      ? fdescribe
      : global.skipCustomTests
      ? xdescribe
      : describe;
  },
  setMainDescriber(challenge) {
    return global.runCustomTestsOnly
      ? xdescribe
      : global.testSingleChallenge === challenge
      ? fdescribe
      : describe;
  },
  setMainRunner(challenge, testCaseIndex) {
    return global.testSingleChallenge === challenge &&
      global.testSingleTestCase === testCaseIndex
      ? fit
      : it;
  }
};
