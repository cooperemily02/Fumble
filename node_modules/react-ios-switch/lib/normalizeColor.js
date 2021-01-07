'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeColor;

var _colorName = require('color-name');

var _colorName2 = _interopRequireDefault(_colorName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// support named colors for backwards compatibility
function normalizeColor(color) {
  return _colorName2.default[color] ? 'rgb(' + _colorName2.default[color].join(',') + ')' : color;
}