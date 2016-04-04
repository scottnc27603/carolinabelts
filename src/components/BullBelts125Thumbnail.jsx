var React = require( 'react' );
var ProductNode = require('./ProductNode.jsx');

var BullBelts1_25Thumbnail = React.createClass({
  render: function() {
    return (
        <ProductNode
          title='Bullhide 1-1/4" Belts'
          link='bullbelts1-25'
          description='Bullhide description.....'
          image='./assets/images/bhbelt125.jpg' />
    );
  }

});

module.exports = BullBelts1_25Thumbnail;
