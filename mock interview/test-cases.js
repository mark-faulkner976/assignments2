module.exports.testCases = {
    // Each test case property name corresponds to a file in ./challenges folder
    char_count: [
        [['aaa', 'a'], 3],
        [['abc', 'c'], 1],
        [['abb', 'b'], 2],
        [['efg', 'z'], 0],
    ],
    remove_chars: [
        [['aaa', 'a'], ''],
        [['abc', 'c'], 'ab'],
        [['abb', 'b'], 'a'],
        [['efg', 'z'], 'efg'],
    ],
    build_grid: [
        [[1, 'x'], [['x']]],
        [[2, 'x'], [['x', 'x'], ['x', 'x']]],
        [[3, 'x'], [['x', 'x', 'x'], ['x', 'x', 'x'], ['x', 'x', 'x']]],
        [[4, 'x'], [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]],
    ],
    validate_dependency: [
        [
            [
                [
                    ['A', 'B'],
                    ['A', 'C'],
                    ['C', 'D'],
                    ['B', 'C'],
                    ['D', 'E'],
                ]
            ],
            true
        ],
        [
            [
                [
                    ['A', 'B'],
                    ['B', 'C'],
                    ['D', 'E'],
                    ['E', 'F'],
                    ['G', 'H'],
                    ['E', 'R'],
                ]
            ],
            true
        ],
        [
            [
                [
                    ['A', 'B'],
                    ['B', 'C'],
                    ['C', 'E'],
                    ['G', 'H'],
                    ['E', 'R'],
                    ['E', 'A'], // A is already listed above
                ]
            ],
            false
        ],
    ],
    valid_brackets: [
        [[''], true],
        [['[]'], true],
        [['[[[]'], false],
        [[']]]'], false],
        [['[[][][[]]]'], true],
    ],
    check_for_numbers: [
        [[[]], false],
        [[[1, 2, 3]], true],
        [[['a', 'b', 'c']], false],
        [[[{}, false, 'x', [], '1']], false],
        [[[{}, false, 'x', [], 1]], true],
    ]
}