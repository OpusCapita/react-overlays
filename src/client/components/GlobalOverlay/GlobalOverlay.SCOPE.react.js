import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from 'jcatalog-showroom';
import Button from 'jcatalog-react-ui-buttons/lib/Button';

@showroomScopeDecorator
class GlobalOverlaySCOPE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      isMounted: false,
      ref: null
    }
  };

  handleToggleShow() {
    this.setState({ isShow: !this.state.isShow });
  }

  handleRef(ref) {
    if(!this.state.ref) {
      this.setState({ ref });
    }
  }

  render() {
    return (
      <div>
        <Button
          isActive={this.state.isShow}
          label="Show"
          onClick={this.handleToggleShow.bind(this)}
          paper={true}
          style={{ marginBottom: '12px' }}
        />
        <div
          ref={this.handleRef.bind(this)}
          style={{
            padding: '72px 48px',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          Restrictor
          <div
            style={{
              position: 'absolute',
              padding: '12px 48px',
              left: '48px',
              bottom: '24px',
              border: '1px solid rgba(0, 0, 0, 0.12)',
            }}
          >
            Parent
            {this._renderChildren()}
          </div>
        </div>
      </div>

    );
  }
}

export default GlobalOverlaySCOPE;
