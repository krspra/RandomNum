let minVal = 1;
let maxVal = 100;
export let interval=1;

export function manageMinVal(val) {
  minVal = Number(val);
}

export function manageMaxVal(val) {
  maxVal = Number(val);
}

export function manageIntervalVal(val) {
  interval = Number(val);
}

export function numGenerator(callback) {
  const intervalId = setInterval(() => {
    const ranNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    callback(ranNum);
  }, interval*1000);
  
  return intervalId;
}

