import {VEVENT} from 'ics-js';
import {EVENT} from 'constants';
import {buildAlarm} from 'actions';

const dtstamp = new Date(Date.now());

const buildEvent = (shift) => {
  const {end, start} = shift;
  const event = new VEVENT();

  event.addProp("UID");
  event.addProp("DTSTAMP", dtstamp);
  event.addProp("SUMMARY", `You work ${start}–${end}`);
  event.addProp("LOCATION", EVENT.LOCATION);
  event.addProp("DTSTART", start);
  event.addProp("DTEND", end);

  event.addComponent(buildAlarm("-P1D"));
  event.addComponent(buildAlarm("-PT12H"));

  return event;
};

export default buildEvent;
