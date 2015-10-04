var should = require('should');
var Class = require('../src/class.js');


describe("Class", function() {
  it("实例化一个类", function() {
    var instance = Class.create({
      initialize: function() {
        this.age = 28;
      },
      name: 'kkdashu',
      show: function() {
        return 'name: ' + this.name + ', age: ' + this.age;
      }
    });
    instance.name.should.equal('kkdashu');
    instance.age.should.equal(28);
    instance.show().should.equal("name: kkdashu, age: 28");
  });
  it("类的继承", function() {
    var Person = Class.extend({
      name: 'kkdashu',
      show: function() {
        return 'name: ' + this.name
      }
    });
    var p = Person.create();
    p.name.should.equal('kkdashu');
    p.show().should.equal('name: kkdashu');

    //create传参数会覆盖类定义时默认的值
    var p2 = Person.create({
      name: 'wmeng',
      show: function(age) {
        return 'name: ' + this.name + ', age: ' + age;
      }
    });
    p2.name.should.equal('wmeng');
    p2.show(28).should.equal('name: wmeng, age: 28');

    var Student = Person.extend({
      grade: '2',
      show: function() {
        var result = Person.prototype.show.call(this);
        return result + ', grade: ' + this.grade;
      }
    });
    var s = Student.create();
    s.name.should.equal('kkdashu');
    s.grade.should.equal('2');
    s.show().should.equal('name: kkdashu, grade: 2');

    var s2 = Student.create({
      name: 's2',
      grade: '3'
    });
    s2.name.should.equal('s2');
    s2.show().should.equal('name: s2, grade: 3');
  });
  it("union properties", function() {
    var Component = Class.extend({
      events: {
        'click .p': 'p1'
      }
    }, {
      events: {
        'click .p2': 'p2'
      }
    });
    var c = Component.create();
    c.should.have.property('events');
    c.events.should.have.property('click .p');
    c.events.should.have.property('click .p2');
    c.events['click .p'].should.equal('p1');
    c.events['click .p2'].should.equal('p2');
  });
});
