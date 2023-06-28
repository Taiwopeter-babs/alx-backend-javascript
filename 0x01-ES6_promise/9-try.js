module.exports = function guardrail(mathFunction) {
  const queue = [];
  let res;
  try {
    res = mathFunction();
    queue.push(res);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
};
