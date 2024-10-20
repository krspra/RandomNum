let minVal = 1;
let maxVal = 100;

export function manageMinVal(val) {
  minVal = Number(val);
}

export function manageMaxVal(val) {
  maxVal = Number(val);
}

export function numGenerator(callback) {
  setInterval(() => {
    const ranNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    callback(ranNum);
  }, 1000);
}
