export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) throw new Error('Flatten undefined or null array');

  const res = [];

  for (let i = 0; i < array.length; i += 1) {

    const elem = array[i];

    if (Array.isArray(elem)) {
        res.push(...elem);
    } else {
        res.push(elem);
    }
  }

  return res;
}
