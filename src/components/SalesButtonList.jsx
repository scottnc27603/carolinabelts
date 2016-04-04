var React = require( 'react' );
var SalesDropDown2 = require('./SalesDropDown2.jsx');

var SalesButtonList = React.createClass( {

  getInitialState: function(){
      return {
          "currentBelt": {}
      };
  },

  componentWillMount: function() {

  },

  render: function() {
    return (
      <div>
        {this.buttons()}
      </div>
    );
  },
  buttons: function() {
    var buttonList = [];

    buttonList.push( <SalesDropDown2
              style='default'
              label='Color:'
              title='select'
              key='1'
              id='1'
              items={['black','brown','tan','cordovan']} /> );
    buttonList.push( <SalesDropDown2
              style='default'
              label='Size:'
              title='select'
              key='2'
              id='2'
              range={ {"min":29, "max":72 } } /> );
    buttonList.push( <SalesDropDown2
              style='default'
              label='Buckle:'
              title='select'
              key='3'
              id='3'
              items={['Brass round','Brass square','Chrome round','Chrome square','Black round','Black square']} /> );
    buttonList.push( <SalesDropDown2
              style='default'
              label='Holes:'
              title='select'
              key='4'
              id='4'
              items={['5 Holes, 1" apart','7 Holes, 3/4" apart']} /> );
    buttonList.push( <SalesDropDown2
              style='default'
              label='Tapered:'
              title='No'
              key='5'
              id='5'
              items={['No','Yes(+$15)']} /> );

    return buttonList;
  }
} );

module.exports = SalesButtonList;
