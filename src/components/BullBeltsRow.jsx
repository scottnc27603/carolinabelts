var React = require( 'react' );
var BullBelts125Thumbnail = require('./BullBelts125Thumbnail.jsx');
var BullBelts1_5Thumbnail = require('./BullBelts1_5Thumbnail.jsx');
var BullBelts1_75Thumbnail = require('./BullBelts1_75Thumbnail.jsx');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var BullBeltsRow = React.createClass( {
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <BullBelts125Thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <BullBelts1_5Thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <BullBelts1_75Thumbnail />
          </Col>
        </Row>
      </Grid>
    );

  }
} );

module.exports = BullBeltsRow;
