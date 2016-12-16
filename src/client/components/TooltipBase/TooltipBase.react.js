import React, { Component, PropTypes } from 'react';
import s from './TooltipBase.module.less';

export default
class TooltipBase extends Component {
  render() {
    let {
      bgColor,
      className,
      color,
      label,
      style, // eslint-disable-line
      ...restProps
    } = this.props;
    let styles = {
      color: color,
      backgroundColor: bgColor,
      ...style
    }
    return (
      <div
        className={`${s.tooltipBase} ${className || ''}`}
        style={styles}
        { ...restProps }
      >
        {label}
      </div>
    );
  }
}

TooltipBase.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  bgColor: PropTypes.string
};
TooltipBase.defaultProps = {
  bgColor: '#333',
  color: '#fff'
};
