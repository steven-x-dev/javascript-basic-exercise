export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if (string === undefined || string === null) return 0;

  if (prediction === undefined) return prediction.length;

  if (prediction === null || prediction.length !== 1) throw new Error('invalid character');

  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === prediction) count += 1;
  }

  return count;
}
