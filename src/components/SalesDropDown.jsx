var React = require( 'react' );
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

var SalesDropDown = React.createClass({

  buttonID: function() {
    return this.props.title + this.props.id;
  },
  render: function() {
    return (
      <div className="row">
        <div className='panel panel-default'>
          <div className='panel-body'>
            <div className='col-sm-1'>
              <h4><span className='label label-primary'>{this.props.label+"  "}</span></h4>
            </div>
            <div className='col-sm-2'>
              <DropdownButton
                bsStyle={this.props.style.toLowerCase()}
                title={this.props.title}
                key={this.props.id}
                onSelect={this.itemSelected}
                id={this.buttonID()}>
                  {this.menuItems()}
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    );
  },
  menuItems: function() {
    var mItems = [];
    var mi;
    if ( this.props.items !== undefined ) {
      for ( var i = 0; i < this.props.items.length; i++ ) {
        mi = this.props.items[ i ];
        mItems.push( <MenuItem eventKey={i+1}>{mi}</MenuItem> );
      }
    } else if ( this.props.range !== undefined ) {
      for ( var i = this.props.range.min; i <= this.props.range.max; i++ ) {
        mItems.push( <MenuItem eventKey={i}>{i}</MenuItem> );
      }
    }
    return mItems;
  },
  itemSelected: function( event, eventKey ) {
    var btn = document.getElementById(this.buttonID());
    var selectedItem;
    if ( btn ) {
      if ( this.props.items !== undefined ) {
        selectedItem = btn.textContent = this.props.items[eventKey-1];
      } else if ( this.props.range !== undefined ) {
        selectedItem = btn.textContent = eventKey;
      }
    }
    if ( this.props.selectionChanged ) {
      this.props.selectionChanged( event, selectedItem || eventKey );
    }
  }

});

module.exports = SalesDropDown;
