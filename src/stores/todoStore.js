var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
	list: []
};

var addItem = function(item) {
	_store.list.push(item);
};

var removeItem = function(index) {
	_store.list.splice(index, 1);
}

var todoStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {//cb為setState...
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},
	getList: function() {
		return _store.list;
	}
});


//dispatcher 收到的action => payload
AppDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.actionType) {
		case appConstants.ADD_ITEM:
			addItem(action.data);
			todoStore.emit(CHANGE_EVENT);//直接觸發"Change" Event
			break;
		case appConstants.REMOVE_ITEM:
			removeItem(action.data);
			todoStore.emit(CHANGE_EVENT);
		default: 
			return true;
	}
});

module.exports = todoStore;