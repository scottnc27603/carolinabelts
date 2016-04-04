var React = require( 'react' );
var BullBeltsSection = require('./BullBeltsSection.jsx');
var SalesDropDown = require('./SalesDropDown.jsx');
var BeltSalesContainer = require('./BeltSalesContainer.jsx');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var SalesContainer = React.createClass( {

  getInitialState: function(){
      return {
          "currentBelt": {}
      };
  },

  componentWillMount: function() {

  },

  render: function() {
    return (
      <div className='container bs-docs-container'>
        <Row>
          <Col xs={3} md={12}>
            <BullBeltsSection />
          </Col>
        </Row>
        <BeltSalesContainer image="./assets/images/bhbelt15Large.jpg" />
      </div>
    );
  }
} );

module.exports = SalesContainer;
