var User = Backbone.Model.extend({
	defaults: {
		username: '',
		age: 0
	},
	idAttribute: "_id"
});

var UserCollection = Backbone.Collection.extend({
	model: User
});

var user1 = new User({
	_id: 10000,
	username: '张三',
	age: 24
});
var user2 = new User({
	_id: 10001,
	username: "李四",
	age: 18
});
var user3 = new User({
	_id: 10002,
	username: "王五",
	age: 20
});
var user4 = new User({
	_id: 10003,
	username: "Jack",
	age: 35
});

var userList = new UserCollection();

userList.add([user1, user2, user3, user4]);

// 方式一、by passing in a model.
var ret1 = userList.get(user2);
// 方式二
var ret2 = userList.get('c2');
// 方式三
var ret3 = userList.get(10001);





