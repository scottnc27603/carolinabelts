var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var ProductNode = require('./ProductNode.jsx');
var BeltColorDropDown = require('./BeltColorDropDown.jsx');


var Belts = React.createClass({
  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <ProductNode
                title='Bull Hide Belt'
                link='bullbelts'
                description='bull hide description.....'
                image='./assets/images/belt.jpg' />
            </Col>
            <Col xs={6} md={4}>
              <ProductNode
                title='Horse Hide Belt'
                link='horsebelts'
                description='horse hide description.....'
                image='./assets/images/horse.jpg' />
            </Col>
            <Col xs={6} md={4}>
              <ProductNode
                title='Elephant Hide Belt'
                link='elephantbelts'
                description='elephant hide description.....'
                image='./assets/images/elephant.jpg' />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

});

module.exports = Belts;
