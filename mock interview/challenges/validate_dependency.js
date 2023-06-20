/**
 * @description - determine whether the list of tuples creates a valid dependency tree (no circular deps)
 * @difficulty - 5/5
 * 
 * @param {Array<[string, string]>} - array of tuples representing a dependency between two things represented as strings (i.e.  ['A', 'B'] where B depends on A)
 * @returns {Boolean}
 * 
 * @example - validateDependencies([['A','B'], ['B','C']]) // --> true
 * @example - validateDependencies([['A','B'], ['B','A']]) // --> false (B depends on A, which already depends on B, this is circular)
 */

const validateDependencies = (deps) => {

}

module.exports = validateDependencies;