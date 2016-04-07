export const ALARM = {
  ACTION: 'DISPLAY',
  DESCRIPTION: 'Event reminder'
};

export const CALENDAR = {
  PRODID: 'Angelo Ashmore',
  VERSION: 2
};

export const EVENT = {
  LOCATION: 'Apple Store'
};

export const QUERIES = {
  BASE_DATE: 'table:first > tbody > tr:nth-child(2) > td:first',
  CONTAINER: '#pane1 > table:nth-child(2) > tbody > tr:first > td:nth-child(2)',
  SHIFT_DAY: 'td.day',
  SHIFT_START: 'td.time',
  SHIFT_END: 'td.time:nth-child(5)',
  SHIFTS: 'table:nth-child(2) > tbody > tr:not(.disable)'
};
