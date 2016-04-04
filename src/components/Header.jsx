var React = require('react');
var PageHeader = require('react-bootstrap').PageHeader;

 var Header = React.createClass({
   render: function() {
     return (
        <div>
          <PageHeader>Carolina Belts <small>- Leather Gun Belts</small></PageHeader>
        </div>
      );
   }
 });

module.exports = Header;
