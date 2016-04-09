import {QUERIES} from 'constants';
import {extractShiftData} from 'actions';
import Shift from 'shift';

const containerNode = document.querySelector(QUERIES.CONTAINER);

const baseDateNode = containerNode.querySelector(QUERIES.BASE_DATE);
const baseDate = baseDateNode.innerText.slice(15);

const shiftNodes = containerNode.querySelectorAll(QUERIES.SHIFTS);
const shifts = [...shiftNodes].map((node) => {
  const {day, end, start} = extractShiftData(node);

  return new Shift(baseDate, day, start, end);
});

export default shifts;
