var React = require( 'react' );
var BullBeltsSection = require('./BullBeltsSection.jsx');
var SalesButtonList = require('./SalesButtonList.jsx');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;
var Image = require('react-bootstrap').Image;

var BeltSalesContainer = React.createClass( {

  getInitialState: function(){
    return {
      "currentBelt": {}
    }
  },

  componentWillMount: function() {

  },

  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={8}>
            <Image src={this.props.image} rounded />
            <p>(Shown above L to R): TAN, BROWN, CORDOVAN, and BLACK.<br />#1 BEST SELLER!<br />Our inch-and-a-half-inch wide belts are a great look for jeans and Dockers or any casual slacks. It is also the preferred width for carrying firearms. These belts are very sturdy (dual-layer bull hide) and will support the weight of just about anything you care to hang on it.  SPECIAL NOTE: All belts are stitched in black thread.  Color coordinated KEY HANGERS are available. All buckles are REMOVABLE! They are held on with strong "Chicago screws".</p>
          </Col>
          <Col xs={6} md={4}>
            <SalesButtonList />
          </Col>
        </Row>
      </Grid>
    );
  }
} );

module.exports = BeltSalesContainer;
