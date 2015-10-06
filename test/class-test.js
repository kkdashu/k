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
      initialize: function() {
        console.log('haha');
        this.sex = 'male';
      },
      name: 'kkdashu',
      show: function() {
        return 'name: ' + this.name
      }
    });
    var p = Person.create();
    p.name.should.equal('kkdashu');
    p.sex.should.equal('male');
    p.show().should.equal('name: kkdashu');

    //create传参数会覆盖类定义时默认的值
    var p2 = Person.create({
      name: 'wmeng',
      show: function(age) {
        return 'name: ' + this.name + ', age: ' + age;
      }
    });
    p2.name.should.equal('wmeng');
    p2.sex.should.equal('male');
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
    s.sex.should.equal('male');
    s.show().should.equal('name: kkdashu, grade: 2');

    var s2 = Student.create({
      name: 's2',
      grade: '3'
    });
    s2.name.should.equal('s2');
    s2.sex.should.equal('male');
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
    Component.prototype.should.have.property('events');
    var Child = Component.extend({
      events: {
        'click .p3': 'p3'
      }
    });
    c = Child.create();
    c.should.have.property('events');
    c.events.should.have.property('click .p');
    c.events.should.have.property('click .p2');
    c.events.should.have.property('click .p3');
    c.events['click .p'].should.equal('p1');
    c.events['click .p2'].should.equal('p2');
    c.events['click .p3'].should.equal('p3');
    var GrandChild = Child.extend({
      events: {
        'click .p4': 'p4'
      }
    }, {
      events: {
        'click .p5': 'p5'
      }
    });
    c = GrandChild.create();
    c.should.have.property('events');
    c.events.should.have.property('click .p');
    c.events.should.have.property('click .p2');
    c.events.should.have.property('click .p3');
    c.events.should.have.property('click .p4');
    c.events.should.have.property('click .p5');
    c.events['click .p'].should.equal('p1');
    c.events['click .p2'].should.equal('p2');
    c.events['click .p3'].should.equal('p3');
    c.events['click .p4'].should.equal('p4');
    c.events['click .p5'].should.equal('p5');
  });
});
