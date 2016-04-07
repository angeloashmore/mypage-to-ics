import ICS from 'ics-js';
import {CALENDAR} from 'constants';
import {shifts} from 'helpers';
import {
  buildCalendar,
  buildEvent,
  validateLocation
} from 'actions';

try {
  validateLocation();

  const calendar = buildCalendar();

  shifts.forEach((shift) => {
    calendar.addComponent(buildEvent(shift));
  });

  calendar.toBase64()
    .then(result => window.location = result);
} catch (e) {
  console.error(e);

  if (e instanceof URIError) {
    alert("Please run this script on MyPage Schedule.");
  } else {
    alert("An error occured while parsing your schedule.");
  }
}
