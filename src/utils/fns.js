function random(limit = 1) {
  return Math.floor(Math.random() * limit);
}

function objectIsEmpty(obj) {
  return !(obj && Object.keys(obj).length > 0);
}

export { random, objectIsEmpty };
