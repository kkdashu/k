var should = require('should');
var Class = require('../app/scripts/lib/class2.js');

describe("Class", function(){
  it("Class.extend", function() {
    var Person = Class.extend({
      initialize: function(name) {
      },
      show: function() {
        return 'name: ' +  this.name + '- age: ' + this.age;
      }
    });
    var p = Person.create({ name: 'kkdashu'}, {age: 28});
    p.name.should.equal('kkdashu');
    p.constructor.should.equal(Person);
    p.show().should.equal("name: kkdashu- age: 28");

    var Student = Person.extend();
    var s = Student.create({name: 'wmeng', age: 28});
    s.name.should.equal('wmeng');
    s.constructor.should.equal(Student);
    s.show().should.equal("name: wmeng- age: 28");
    p.name.should.equal('kkdashu');
  });
});
