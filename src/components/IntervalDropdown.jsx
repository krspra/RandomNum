import React from "react";

function IntervalDropdown({onNewDropvalue}) {
  const intervalArray = [];

  for (let i = 1; i <= 10; i++) {
    intervalArray.push(
      <option key={i} value={i} className="bg-slate-500 text-white">
        {i}
      </option>
    );
  }

  function manageDropdown(event){
    onNewDropvalue(event.target.value);
  } 
  return (
    <div className="bg-slate-500 p-2 rounded-md flex gap-1 justify-center items-center">
      <label htmlFor='interval' className="text-white">
        Interval
      </label>
      <select
        onChange={manageDropdown}
        defaultValue={1}
        className="focus:outline-none rounded-md scrollbar-thin scrollbar-thumb bg-white p-1"
        name="numbers"
        id='interval'
      >
        {intervalArray}
      </select>
    </div>
  );
}

export default IntervalDropdown;
