import { Component, Property } from 'immutable-ics'
import guid from 'simple-guid'

const validLocation = (href) => (
  href.match(/^https:\/\/mypage.apple.com\/myPage\/myTime.*/)
)

const buildAlarm = (trigger) => new Component({
  name: 'VALARM',
  properties: [
    new Property({ name: 'ACTION', value: 'DISPLAY' }),
    new Property({ name: 'TRIGGER', value: trigger }),
    new Property({ name: 'DESCRIPTION', value: 'Event Reminder' })
  ]
})

const buildCalendar = (schData) => new Component({
  name: 'VCALENDAR',
  properties: [
    new Property({ name: 'VERSION', value: 2 }),
    new Property({ name: 'PRODID', value: 'Angelo Ashmore' })
  ],
  components: Object.entries(schData).map(([date, data]) => (
    new Component({
      name: 'VEVENT',
      properties: [
        new Property({ name: 'UID', value: guid() }),
        new Property({ name: 'DTSTAMP', value: new Date() }),
        new Property({ name: 'SUMMARY', value: `You work at ${data.startTime}` }),
        new Property({ name: 'LOCATION', value: 'Apple Store' }),
        new Property({
          name: 'DTSTART',
          value: new Date(`${data.startDate} ${data.startTime}`)
        }),
        new Property({
          name: 'DTEND',
          value: new Date(`${data.endDate} ${data.endTime}`)
        })
      ],
      components: [
        buildAlarm('-P1D'),
        buildAlarm('-PT12H')
      ]
    })
  ))
})

if (!validLocation(window.location.href)) {
  window.alert('Please run this script on myPage Time Overview.')
} else {
  try {
    const schDataEl = document.getElementById('schData')
    const schData = JSON.parse(schDataEl.value)

    const calendar = buildCalendar(schData)
    const base64Data = window.btoa(calendar.toString())

    window.location = base64Data
  } catch (error) {
    window.alert('An error occured while parsing your schedule.')
  }
}
