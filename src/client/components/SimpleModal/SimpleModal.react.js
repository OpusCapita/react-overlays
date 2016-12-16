import React, { Component, PropTypes } from 'react';
import s from './SimpleModal.module.less';
import { Motion, spring, presets } from 'react-motion';

export default
class SimpleModal extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    let {
      isShow,
      onAnimationRest,
      style, // eslint-disable-line
      ...restProps
    } = this.props;

    let springPreset = presets.stiff;
    let motionDefaultStyle = {
      x: isShow ? 0 : -100,
      y: isShow ? 1 : 0
    };
    let motionStyle = {
      x: isShow ? spring(0, springPreset) : spring(-100, springPreset),
      y: isShow ? spring(1, springPreset) : spring(0, springPreset)
    };

    return (
      <Motion
        defaultStyle={motionDefaultStyle}
        style={motionStyle}
        onRest={onAnimationRest}
      >
        {interpolatedStyle => (
          <div
            className={s.simpleModal}
            style={{
              transform: `translate(0, ${interpolatedStyle.x}%)`,
              opacity: `${interpolatedStyle.y}`,
              ...style
            }}
            { ...restProps }
          >
            {this.props.children}
           </div>
          )
        }
      </Motion>
    );
  }
}

SimpleModal.propTypes = {
  isShow: PropTypes.bool,
  onAnimationRest: PropTypes.func
};
SimpleModal.defaultProps = {
  onAnimationRest: () => {}
};
