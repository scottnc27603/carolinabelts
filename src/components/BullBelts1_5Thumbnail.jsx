var React = require( 'react' );
var ProductNode = require('./ProductNode.jsx');

var BullBelts1_5Thumbnail = React.createClass({
  render: function() {
    return (
        <ProductNode
          title='Bullhide 1-1/2" Belts'
          link='bullbelts1-5'
          description='Bullhide description.....'
          image='./assets/images/bhbelt15.jpg' />
    );
  }

});

module.exports = BullBelts1_5Thumbnail;
