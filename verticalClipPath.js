export default (thickness) => (n, count, active) => {
    const l = (1 / count) * 100;
    if (active === null)
      return `polygon(0 ${n * l}%, 0 ${n * l + l}%, 100% ${n * l + l}%, 100% ${n * l}%)`;
    if (active === n) {
      return `polygon(0 ${n * thickness}%, 0 ${100 - (count - n - 1) * thickness}%, 100% ${100 - (count - n - 1) * thickness}%, 100% ${n * thickness}%)`;
    } else {
      return active < n
        ? `polygon(0 ${100 - (count - n) * thickness}%, 0 ${100 - (count - n - 1) * thickness}%, 100% ${100 - (count - n - 1) * thickness}%, 100% ${100 - (count - n) * thickness}%)`
        : `polygon(0 ${n * thickness}%, 0 ${n * thickness + thickness}%, 100% ${n * thickness + thickness}%, 100% ${n * thickness}%)`;
    }
  };
  