function cartTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price; // BUG: ignores item.qty
  }
  return total;
}
module.exports = { cartTotal };
