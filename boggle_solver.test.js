const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {

    //test for valid words in all of the submissions
    
    test('Normal case 2x2', () =>{
        //Tests a normal 2x2 grid.
        let grid = [['A', 'B'],
                    ['C', 'D']];
        let dictionary = ['abc', 'abd', 'ada', 'bcd'];
        let expected = ['abc', 'abd', 'bcd'];

        let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
    test('Normal case 3x3', () => {
      // Tests a normal 3x3 grid.
      let grid = [['A', 'B', 'C'],
                    ['D', 'E', 'F'],
                    ['G', 'H', 'I']];
      let dictionary = ['abc', 'abdhi', 'abi'];
      let expected = ['abc', 'abdhi'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Normal case 4x4', () =>{
        //Tests a normal 4x4 grid.
        let grid = [['A', 'B', 'J', 'O'],
                    ['C', 'D', 'E', 'K'],
                    ['I', 'M', 'R', 'P'],
                    ['L', 'U', 'N', 'Z']];
        let dictionary = ['bad', 'acdz', 'dab', 'cab', 'joke', 'joker', 'dim', 'dime', 'rum', 'run', 'lime', 'lure', 'bcr'];
        let expected = ['bad', 'dab', 'cab', 'joke', 'joker', 'dim', 'dime', 'rum', 'run', 'lime', 'lure'];

        let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Normal case 5x5', () =>{
        //Tests a normal 5x5 grid.
        let grid = [['A', 'B', 'J', 'O', 'C'],
                    ['C', 'D', 'E', 'K', 'St'],
                    ['I', 'M', 'R', 'P', 'A'],
                    ['L', 'U', 'N', 'Z', 'Qu'],
                    ['W', 'F', 'H', 'X', 'I']];
        let dictionary = ['quiz', 'stake', 'whale', 'coke', 'quake', 'jerk', 'stork', 'zap'];
        let expected = ['quiz', 'stake', 'coke', 'quake', 'jerk', 'zap'];

        let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

  });

  
  describe('Problem contraints', () => {
    // Cases such as Qu
    test('Works with Qu', () =>{
      let grid = [['A', 'Qu'],
                  ['B', 'C']];
      let dictionary = ['AQu', 'BQu'];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(dictionary);
      expect(solutions.sort()).toEqual(dictionary.sort());
    });

    //End with Q
    test('Ends with Q', () => {
      let grid = [['A', 'Qu'],
                  ['B', 'C']];
      let dictionary = ['AQ', 'CQ'];
      let expected = [];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(dictionary);
      expect(solutions.sort()).toEqual(expected.sort());
    });
 
    //contains Qx (x != "u"), only returns valid Qu inputs
    test('Qx cases', () => {
      let grid = [['A', 'Qx'],
                  ['Qu', 'C']];
      let dictionary = ['AQu', 'CQu', 'QuC', 'Qua'];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(dictionary);
      expect(solutions.sort()).toEqual(dictionary.sort());
    });

    // Cases such as St
    test('Works with St', () =>{
      let grid = [['A', 'B'],
                  ['St', 'C']];
      let dictionary = ['ASt', 'BSt', 'StC'];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(dictionary);
      expect(solutions.sort()).toEqual(dictionary.sort());
    });

    //Non-adjacent letters
    test('Non-adjacent', () =>{
      let grid = [['A', 'B', 'C'],
                    ['D', 'E', 'F'],
                    ['G', 'H', 'I']];
      let dictionary = ['Abe', 'fda', 'bed'];
      let expected = ['bed', 'abe'];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(dictionary);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });

  
  describe('Input edge cases', () => {

    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['I', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Edge case 0x0', () => {
      // Algorithm should return an empty list since the grid is empty
      let grid = [[]];
      let dictionary = ['good', 'morning', 'sunshine'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Edge case 1x1', () => {
      // Algorithm should return an empty list since there are less than 3 letters
      let grid = [['A'],
                  ['B']];
      let dictionary = ['good', 'morning', 'sunshine', 'ab', 'ba'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Duplicate letters', () =>{
      //Should not return a letter multiple times if that letter is not int the grid the amount of times used
      let grid = [['A', 'B', 'J', 'O', 'C'],
                    ['C', 'H', 'N', 'K', 'St'],
                    ['I', 'M', 'E', 'P', 'A'],
                    ['L', 'U', 'R', 'E', 'Qu'],
                    ['W', 'F', 'D', 'X', 'I']];
      let dictionary = ['here', 'cook', 'runner', 'keep', 'nook'];
      let expected = ['here', 'keep'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    })
  });
});
