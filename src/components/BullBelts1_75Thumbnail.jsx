var React = require( 'react' );
var ProductNode = require('./ProductNode.jsx');

var BullBelts1_75Thumbnail = React.createClass( {
  render: function() {
    return (
        <ProductNode
          title='Bullhide 1-3/4" Belts'
          link='bullbelts1-75'
          description='bullhide description.....'
          image='./assets/images/bhbelt175.jpg' />
    );
  }

} );

module.exports = BullBelts1_75Thumbnail;
