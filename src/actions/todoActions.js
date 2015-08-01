var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');

var todoActions =  {
	addItem: function(item) {
		AppDispatcher.handleAction({
			actionType: appConstants.ADD_ITEM,
			data: item
		});
	},
	removeItem: function(index) {
		AppDispatcher.handleAction({
			actionType: appConstants.REMOVE_ITEM,
			data: index
		});
	}
}

module.exports = todoActions;