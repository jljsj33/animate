/**
 * only require other specs here
 */
'use strict';

var expect = require('expect.js');
var Animate = require('../index');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('./index.spec.css');

var createClass = function (options) {
  return React.createClass({
    getInitialState(){
      return {
        transitionEnter: options.transitionEnter
      };
    },
    render() {
      return (
        <Animate
          ref="anim"
          transitionName="example"
          component={options.component}>
          {options.remove && !this.state.transitionEnter ? null : <div key="1">child element</div>}
        </Animate>
      );
    }
  });
};

require('./single-common.spec')(createClass,'transition');