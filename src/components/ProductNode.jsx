var React = require('react');
var Thumbnail = require('react-bootstrap').Thumbnail;
var Button = require('react-bootstrap').Button;

var ReactRouter = require( 'react-router' );
var Link = ReactRouter.Link;

 var ProductNode = React.createClass({
   render: function() {
     return (
          <div>
            <Thumbnail src={this.props.image} alt="242x200">
              <h3>{this.props.title}</h3>
              <p>
                <Button href={this.props.link} onClick={Link.handleClick} bsStyle="primary">More Info</Button>
              </p>
            </Thumbnail>
          </div>
      );
   }

 });

 module.exports = ProductNode;
