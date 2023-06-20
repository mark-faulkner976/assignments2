/**
 * @fileoverview - Custom tests for special scenarios can be added here.
 */

const { setCustomDescriber } = require("./utils");

const describer = setCustomDescriber();

/**************************************************************************************/
describer("Custom Tests", () => {
  it("Should run custom test", () => {
    expect(true).toBe(true);
  });
});
