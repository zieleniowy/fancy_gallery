"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Gallery;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const styles = {
  root: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    boxSizing: 'content-box'
  },
  child: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'all 0.295s'
  }
};

function ControlledGallery(props) {
  const count = _react.default.Children.count(props.children);

  return /*#__PURE__*/_react.default.createElement("div", {
    onMouseLeave: () => props.onChange(null),
    className: styles.className,
    style: { ...styles.root,
      ...props.style
    }
  }, _react.default.Children.map(props.children, (child, n) => /*#__PURE__*/_react.default.createElement("div", {
    onMouseEnter: () => props.onChange(n),
    className: styles.child,
    style: { ...style.child,
      clipPath: props.getClipPath(n, count, props.active)
    }
  }, props.noClone ? child : /*#__PURE__*/_react.default.cloneElement(child, { ...child.props,
    active: true
  }))));
}

function UncontrolledGallery(props) {
  const [active, setActive] = _react.default.useState(null);

  return /*#__PURE__*/_react.default.createElement(ControlledGallery, _extends({}, props, {
    onChange: setActive,
    active: active
  }));
}

function Gallery(props) {
  return props.active === undefined ? /*#__PURE__*/_react.default.createElement(UncontrolledGallery, props) : /*#__PURE__*/_react.default.createElement(ControlledGallery, props);
}