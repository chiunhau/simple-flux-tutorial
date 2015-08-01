var React = require('react');

var List = React.createClass({
  render: function() {
  	var listItems = this.props.items.map(function(item, i) {
  		return (
  			<li key={i} className="lsit-item" onClick={this.props.removeItem.bind(null, i)}>
	  			{item}
	  		</li>
  		)
  	}.bind(this));
  	return (
			<div className="list">
				<h3> Item List! </h3>
				<ul>
					{listItems}
				</ul>
			</div>
  	);
  }
});

module.exports = List;