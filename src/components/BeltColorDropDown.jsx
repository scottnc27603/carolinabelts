var React = require( 'react' );
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

var BeltColorDropDown = React.createClass({

  render: function() {
    return (

      <div class="control-group">
        <label>{this.props.label+"   "}</label>
        <DropdownButton
          bsStyle={this.props.style.toLowerCase()}
          title={this.props.title}
          key={this.props.id}
          onSelect={this.colorSelected}>
            {this.colors()}
        </DropdownButton>
      </div>
    );
  },
  colors: function() {
    var beltColors = [];
    var color;
    for ( var i = 0; i < this.props.colors.length; i++ ) {
      color = this.props.colors[ i ];
      beltColors.push( <MenuItem eventKey={i+1}>{color}</MenuItem> );
    }
    return beltColors;
  },
  colorSelected: function(event,eventKey) {
    debugger;
  }

});

module.exports = BeltColorDropDown;
