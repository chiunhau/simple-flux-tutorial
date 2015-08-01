var React = require('react');

var AddItem = React.createClass({
	handleSubmit: function(e) {
		var newItem = this.refs.newItem.getDOMNode().value;
		this.props.addItem(newItem);
		this.refs.newItem.getDOMNode().value = "";
	},
  render: function() {
  	return (
			<div className="add-item">
				<input type="text" ref="newItem" placehoder="Add Item..." />
				<button onClick={this.handleSubmit}>Add</button>
			</div>
  	);
  }
});

module.exports = AddItem;