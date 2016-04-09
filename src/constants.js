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
  BASE_DATE: 'table:first-child > tbody > tr:nth-child(2) > td:first-child',
  CONTAINER: '#pane1 > table:nth-child(2) > tbody > tr:first-child > td:nth-child(2)',
  SHIFTS: 'table:nth-child(2) > tbody > tr:not(.disable)',
  SHIFT_DAY: 'td.day',
  SHIFT_END: 'td.time:nth-child(5)',
  SHIFT_START: 'td.time'
};
