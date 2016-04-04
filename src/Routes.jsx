var React = require( 'react' );

var Base = require( './components/Base.jsx' );
var Belts = require( './components/Belts.jsx' );
var BullBelts = require( './components/BullBelts.jsx' );
var HorseBelts = require( './components/HorseBelts.jsx' );
var ElephantBelts = require( './components/ElephantBelts.jsx' );

var ReactRouter = require( 'react-router' );
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
//var HashHistory = require('react-router/lib/hashhistory');
var Link = ReactRouter.Link;

module.exports = (
  <Router>
    <Route path="/" component={Base}>
      <Route path="/bullbelts" component={BullBelts} />
      <Route path="/horsebelts" component={HorseBelts} />
      <Route path="/elephantbelts" component={ElephantBelts} />
    </Route>
  </Router>
)
