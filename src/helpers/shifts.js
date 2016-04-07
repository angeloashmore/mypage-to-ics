import {QUERIES} from 'constants';
import {baseDate} from 'helpers';
import Shift from 'shift';

const containerNode = document.querySelector(QUERIES.CONTAINER);
const shiftNodes = containerNode.querySelectorAll(QUERIES.SHIFTS);
const shifts = [...shiftNodes].map((node) => {
  const {day, end, start} = extractShiftData(node);
  return new Shift(baseDate, day, start, end);
});

export default shifts;
