import {QUERIES} from 'constants';

const extractShiftData = (node) => {
  return {
    day: node.querySelector(QUERIES.SHIFT_DAY).innerText,
    start: node.querySelector(QUERIES.SHIFT_START).innerText,
    end: node.querySelector(QUERIES.SHIFT_END).innerText
  };
};

export default extractShiftData;
