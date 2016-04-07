import {VCALENDAR} from 'ics-js';
import {CALENDAR} from 'constants';

const buildCalendar = () => {
  const calendar = new VCALENDAR();

  cal.addProp("VERSION", CALENDAR.VERSION);
  cal.addProp("PRODID", CALENDAR.PRODID);

  return calendar;
};

export default buildCalendar;
