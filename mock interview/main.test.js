const { testCases } = require("./test-cases");
const functions = require("./main");
const { setMainDescriber, setMainRunner } = require("./utils");

const testCaseKeys = Object.keys(testCases);
const functionKeys = Object.keys(functions);

try {
  for (const k of testCaseKeys) {
    if (!functionKeys.includes(k))
      throw Error(`No function found for test case '${k}'`);
  }
  for (const k of functionKeys) {
    if (!testCaseKeys.includes(k))
      throw Error(`No test case found for function '${k}()'`);
    const describer = setMainDescriber(k);
    describer(`Unit testing function '${k}()'`, () => {
      testCases[k].forEach(([inputs, expected], i) => {
        const runner = setMainRunner(k, i);
        runner(`\nTest case #${i + 1}: Should output correct value with parameters: \n${inputs.map(inp => JSON.stringify(inp)).join(', ')}`, () => {
          expect(functions[k](...inputs)).toStrictEqual(expected);
        });
      });
    });
  }
} catch (e) {
  console.error(e.message);
}
