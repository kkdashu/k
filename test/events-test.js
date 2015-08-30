var should = require('should');
var Event = require('../app/scripts/lib/events.js');
var Class = require('../app/scripts/lib/class2.js');

describe('Events', function() {
  it('on and trigger', function() {
    var result = '',
        event = Event();
    event.on('say', function() {
      result = 'say';
    });
    result.should.equal('');
    event.trigger('say');
    result.should.equal('say');
  });
  it('off', function() {
    var result = 1;
    event = Event();
    event.on('add', function(){
      result++;
    });
    result.should.equal(1);
    event.trigger('add');
    result.should.equal(2);
    event.off('add');
    result.should.equal(2);
  });
  it('event with class', function() {
    var Events = require('../app/scripts/lib/events.js');
    var events = Events();
    var Person = Class.extend(events, {
      work: function() {
        this.trigger('work');
      }
    });
    var r = '';
    var p = Person.create({name: 'kkdashu'});
    p.on('work', function() {
      r = 'writing javascript';
    });
    p.work();
    r.should.equal('writing javascript');


    r = '';
    var p2 = Person.create({name: 'hqg'});
    p2.work();
    r.should.equal('');
    p2.on('work', function() {
      r = 'p2 is working';
    });
    p2.work();
    r.should.equal('p2 is working');
  });
})
