# V School Code Talk Challenges

### About
- A playground Node.js environment for testing and debugging pure, single functions. 
- Useful for running local debugger and creating custom test cases for code puzzles from Edabit, Code Wars, etc. 

### Getting Started
- `npm install`
- `npm run test`
- In VS Code, you can run the debugger using the Jest configuration called `Unit Test` listed in `.vscode/launch.json` file. Hotkey is F5. This will automatically read the `jest.config.js` file

### Creating Custom Challenges
- Within `/challenges` directory, create a file which contains a default export of the function you wish to test. For example:
```js
// challenges/add_func.js
module.exports = (x, y) => { return x + y };
```

- In `test-cases.js` add a property (using same name as the file created above) to the default export object which defines an array containing the set of inputs and expected values. Each test case should look something like this:

```js
// test-cases.js
module.exports = {
    add_func: [
        [
            // arguments to be passed the 'add_func' function:
            [1, 2], 
            // expected output of the 'add_func' function:
            3
        ],
        [[0, 0], 0],
        [[-1, -2], -3],
    ],
    // etc...
}
```

### Testing Single Challenges
- To run tests for all cases defined for a given challenge, set the property `globals.testSingleChallenge` within `jest.config.js` to the name of the file you wish to test as defined in `/challenges` (omit the `.js` extension). For example: 
```js
// jest.config.js
module.exports = {
    globals: {
        testSingleChallenge: "add_func"
    },
    //...
}
```

### Testing Single Test Cases
- To run a test on a single test case for a given challenge, set the property `globals.testSingleTestCase` within `jest.config.js` to the index of the test case you wish to try. The property `globals.testSingleChallenge` must also be defined. For example: 
```js
// jest.config.js
module.exports = {
    globals: {
        testSingleChallenge: "add_func",
        testSingleTestCase: 0
    },
    // ...
}
```

### Custom Tests
- The default workflow in `main.test.js` may not work for some scenarios, so custom tests can be added to `custom.test.js`.
- By default custom tests are switched off. To enable them, set the property `globals.skipCustomTests` within `jest.config.js` to `false`.
- To run only custom tests, set the property `globals.runCustomTestsOnly` within `jest.config.js` to `true`. This will override the other settings.

### Author
- Reach out to [Ben Turner](bbgrabbag@gmail.com) for any questions, bugs, or contribution requests.

### [Changelog](./changelog.md)