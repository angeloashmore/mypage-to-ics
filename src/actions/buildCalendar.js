import ICS from 'ics-js';
import {CALENDAR} from 'constants';

const buildCalendar = () => {
  const calendar = new ICS.VCALENDAR();

  calendar.addProp("VERSION", CALENDAR.VERSION);
  calendar.addProp("PRODID", CALENDAR.PRODID);

  return calendar;
};

export default buildCalendar;
