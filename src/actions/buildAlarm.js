import {ALARM} from 'constants';

const buildAlarm = (trigger) => {
  const alarm = new ICS.VALARM();

  alarm.addProp("ACTION", ALARM.ACTION);
  alarm.addProp("TRIGGER", trigger);
  alarm.addProp("DESCRIPTION", ALARM.DESCRIPTION);

  return alarm;
}

export default buildAlarm;
