import assert from 'assert'
import { describe, it } from 'mocha'
import Shift from '../src/shift'

const shift = new Shift('Jul 18, 2015', 'Friday', '9:00PM', '5:00AM')

describe('Shift', () => {
  it('should return correct start and end Date objects', () => {
    assert.deepEqual(shift.start, new Date('2015-07-24 9:00 PM'))
    assert.deepEqual(shift.end, new Date('2015-07-25 5:00 AM'))
  })

  it('should return correct start and end time raw strings', () => {
    assert.equal(shift.startTimeRaw, '9:00PM')
    assert.equal(shift.endTimeRaw, '5:00AM')
  })
})
