export default (thickness) => (n, count, active) => {
  const l = (1 / count) * 100;
  if (active === null)
    return `polygon(${n * l}% 0, ${n * l + l}% 0, ${n * l + l}% 100%, ${n * l}% 100%)`;
  if (active === n) {
    return `polygon(${n * thickness}% 0, ${100 - (count - n - 1) * thickness}% 0, ${100 - (count - n - 1) * thickness}% 100%, ${n * thickness}% 100%)`;
  } else {
    return active < n
      ? `polygon(${100 - (count - n) * thickness}% 0, ${100 - (count - n - 1) * thickness}% 0, ${100 - (count - n - 1) * thickness}% 100%, ${100 - (count - n) * thickness}% 100%)`
      : `polygon(${n * thickness}% 0, ${n * thickness + thickness}% 0, ${n * thickness + thickness}% 100%, ${n * thickness}% 100%)`;
  }
};
