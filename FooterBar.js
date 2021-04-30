import React from 'react';
import PropTypes from 'prop-types';

class FooterBar extends React.Component {
  static propTypes = {
    height: PropTypes.number,
    children: PropTypes.node,
  };

  render() {
    return <div className="footer-bar footer-bar-fluid d-flex">
      <style>
        {`
        body {
            margin-bottom: ${this.props.height}px;
        }
        `}
      </style>
      {this.props.children}
    </div>;
  }
}

FooterBar.defaultProps = {
  height: 58, // 48 + 10
};

export default FooterBar;
