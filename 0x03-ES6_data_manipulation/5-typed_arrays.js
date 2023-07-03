export default function createInt8TypedArray(length, position, value) {

  if (position > length) {
    throw new Error('Position outside range');
  }
  // create the buffer, values are pre-initialized to 0
  const buffer = new ArrayBuffer(length);
  // create a typed array view
  const int8view = new Int8Array(buffer);
  // set value to position
  int8view[position] = value;

  return buffer;
}
