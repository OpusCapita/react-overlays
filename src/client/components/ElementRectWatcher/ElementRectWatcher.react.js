import React, { PropTypes, Component } from 'react';

export default
class ElementRectWatcher extends Component {
  componentDidMount() {
    this.calculateSize();
  }

  componentWillUnmount() {
    this.cancelCalculateSize();
  }

  calculateSize(node) {
    let rect = this._node.getBoundingClientRect() || {};
    this.props.onChange(rect);
    this._animationFrame = window.requestAnimationFrame(() => this.calculateSize(node));
  }

  cancelCalculateSize() {
    if (this._animationFrame) {
      cancelAnimationFrame(this._animationFrame);
    }
  }

  render() {
    let {
      children,
      onChange, // eslint-disable-line no-unused-vars
      ...restProps
    } = this.props;

    return (
      <div
        {...restProps}
        ref={ref => (this._node = ref)}
      >
        {children}
      </div>
    );
  }
}

ElementRectWatcher.propTypes = {
  onChange: PropTypes.func
};
ElementRectWatcher.defaultProps = {
  onChange: () => {}
};
