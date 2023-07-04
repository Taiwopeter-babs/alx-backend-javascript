let counter = 0;

export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (counter >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, ++counter);
}
