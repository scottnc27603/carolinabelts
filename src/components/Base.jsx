var React = require('react');
var Header = require( './Header.jsx' );
var HeaderNavBar = require( './HeaderNavBar.jsx' );
var Footer = require( './Footer.jsx' );
var SalesContainer = require( './SalesContainer.jsx' )


var Base = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <HeaderNavBar />
        {this.content()}
        <Footer />
      </div>
    );
  },
  content: function() {
    if ( this.props.children ) {
      return this.props.children;
    } else {
      return <SalesContainer />
    }
  }
});

module.exports = Base;
