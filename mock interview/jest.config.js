/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  globals: {
    /*  
    If defined, jest will only run tests on the function exported from this file (omit file extension) as defined in the directory '/challenges': 
    */
    // testSingleChallenge: 'check_for_numbers',

    /* 
    If defined, jest will only run test on the specified test case index. Will do nothing if 'testSingleChallenge' is not also defined.
    */
    // testSingleTestCase: 0,

    /*
    If set to 'true', only custom tests will run:
    */
    runCustomTestsOnly: false,

    /*
    If set to 'true', custom tests will not run. Will do nothing if 'runCustomTestsOnly' is set to 'true'
    */
    skipCustomTests: true
  },

  clearMocks: true,
  coverageProvider: "v8",
  verbose: true,
};
