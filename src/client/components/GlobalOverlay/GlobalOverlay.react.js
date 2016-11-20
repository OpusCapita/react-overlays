import React, { Component, PropTypes } from 'react';

export default
class GlobalOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let { restrictorNode } = this.props;
    if(restrictorNode) {
      this.adjustPosition(restrictorNode);
    }
  }

  componentWillUnmount() {
    this.cancelAdjustPosition();
  }

  componentWillReceiveProps(nextProps) {
    let { restrictorNode } = nextProps;
    this.cancelAdjustPosition();
    if(restrictorNode) {
      this.adjustPosition(restrictorNode);
    }
  }


  adjustPosition(restrictorNode) {
    let rect = restrictorNode.getBoundingClientRect() || {};
    if(rect.width !== this.state.rectWidth) {
      this.setState({ rectWidth: rect.width });
    }
    if(rect.height !== this.state.rectHeight) {
      this.setState({ rectHeight: rect.height });
    }
    if(rect.left !== this.state.rectLeft) {
      this.setState({ rectLeft: rect.left });
    }
    if(rect.right !== this.state.rectRight) {
      this.setState({ rectRight: rect.right });
    }
    if(rect.top !== this.state.rectTop) {
      this.setState({ rectTop: rect.top });
    }
    if(rect.bottom !== this.state.rectBottom) {
      this.setState({ rectBottom: rect.bottom });
    }

    let ref = this._ref.getBoundingClientRect() || {};
    if(ref.width !== this.state.refWidth) {
      this.setState({ refWidth: ref.width });
    }
    if(ref.height !== this.state.refHeight) {
      this.setState({ refHeight: ref.height });
    }
    if(ref.left !== this.state.refLeft) {
      this.setState({ refLeft: ref.left });
    }
    if(ref.right !== this.state.refRight) {
      this.setState({ refRight: ref.right });
    }
    if(ref.top !== this.state.refTop) {
      this.setState({ refTop: ref.top });
    }
    if(ref.bottom !== this.state.refBottom) {
      this.setState({ refBottom: ref.bottom });
    }

    this._animationFrame = window.requestAnimationFrame(() => this.adjustPosition(restrictorNode));
  }

  cancelAdjustPosition() {
    if(this._animationFrame) {
      cancelAnimationFrame(this._animationFrame);
    }
  }

  render() {
    let { className, style, isShow, restrictorNode } = this.props;
    let {
      rectWidth,
      rectHeight,
      rectLeft,
      rectRight,
      rectTop,
      rectBottom,

      refWidth,
      refHeight,
      refLeft,
      refRight,
      refTop,
      refBottom
    } = this.state;

    let rightOverflow = refRight - rectRight;
    let leftOverflow = rectLeft - refLeft;
    let topOverflow = rectTop - refTop;
    let bottomOverflow = refBottom - rectBottom;

    let maxWidth = (refWidth >= rectWidth) ? rectWidth + 'px' : 'none';
    let maxHeight = (refHeight >= rectHeight) ? rectHeight + 'px' : 'none';
    let display = isShow ? (style.display || 'block') :  'none';

    let styles = {
      display: display,
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      position: 'absolute'
    };

    return (
      <div
        ref={ ref => (this._ref = ref)}
        className={className}
        style={styles}
      >
        <div style={{
          position: 'relative',
          left: (rightOverflow > 0 ? -rightOverflow : 0) + 'px',
          right: (leftOverflow > 0 ? -leftOverflow : 0) + 'px',
          top: (bottomOverflow > 0 ? -bottomOverflow : 0) + 'px',
          bottom: (topOverflow > 0 ? -topOverflow : 0) + 'px'
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

GlobalOverlay.propTypes = {
  className: PropTypes.string,
  isShow: PropTypes.bool,
  restrictorNode: PropTypes.object,
  style: PropTypes.object
};

GlobalOverlay.defaultProps = {
  restrictorNode: document.body,
  style: {}
};
