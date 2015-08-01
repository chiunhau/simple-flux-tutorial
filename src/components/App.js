var React = require('react');
var AddItem = require('./AddItem.js');
var List = require('./List.js');

var todoStore = require('../stores/todoStore.js');
var todoActions = require('../actions/todoActions.js');


var App = React.createClass({
	_onChange: function() {
		this.setState({
			list: todoStore.getList()
		});
	},
	getInitialState: function() {
		return {
			list: todoStore.getList()
		}
	},
	componentDidMount: function() {
		todoStore.addChangeListener(this._onChange);
	},
	componentWillMount: function() {
		todoStore.removeChangeListener(this._onChange);
	},
	handleAddItem: function(newItem) {
		todoActions.addItem(newItem);
	},
	handleRemoveItem: function(index) {
		todoActions.removeItem(index);
	},
  render: function() {
  	return (
			<div className="app">
				<h1> This is an Todo App! </h1>
				<AddItem addItem={this.handleAddItem}/>
				<List items={this.state.list} removeItem={this.handleRemoveItem}/>
			</div>
  	);
  }
});

module.exports = App;