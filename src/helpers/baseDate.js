import {QUERIES} from 'constants';

const containerNode = document.querySelector(QUERIES.CONTAINER);
const baseDateNode = containerNode.querySelector(QUERIES.BASE_DATE);
const baseDate = baseDateNode.innerText().slice(15);

export default baseDate;
