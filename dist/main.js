webpackJsonp([2],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    var rml = this.getRml();
    this.createContainer();
    this.createScript('\n      class RMLMain extends React.Component {\n        state = {\n            ' + rml.state + '\n        }\n        \n        render() {\n          return (\n            <div>\n              ' + rml.content + '\n            </div>\n          );\n        }\n      }\n    \n      ReactDOM.render(\n        <RMLMain/>,\n        document.getElementById(\'container\')\n      )\n    ');
  }

  _createClass(Main, [{
    key: 'createContainer',
    value: function createContainer() {
      var container = document.createElement('div');
      container.id = 'container';
      document.body.appendChild(container);
    }
  }, {
    key: 'createScript',
    value: function createScript(content) {
      var script = document.createElement('script');
      script.innerHTML = content;
      script.type = 'text/babel';
      document.body.appendChild(script);
    }
  }, {
    key: 'getRml',
    value: function getRml() {
      var rml = '';
      for (var i = 0; i < document.scripts.length; i++) {
        if (document.scripts[i].type === 'text/rml') {
          rml = document.scripts[i].innerHTML;
        }
      }
      var content = rml.replace(/\<State[\s\S]*?\/\>/gi, '');
      var match = rml.match(/\<State\s*declare=\{\{((\s|\S)*?)\}\}\/\>/);
      var state = match ? match[1] : '';
      return {
        content: content,
        state: state
      };
    }
  }]);

  return Main;
}();

new Main();

/***/ })

},[124]);