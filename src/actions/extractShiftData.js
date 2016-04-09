import {QUERIES} from 'constants';

export default (node) => {
  return {
    day: node.querySelector(QUERIES.SHIFT_DAY).innerText,
    end: node.querySelector(QUERIES.SHIFT_END).innerText,
    start: node.querySelector(QUERIES.SHIFT_START).innerText
  };
};
