import React, { Component } from 'react';
import { showroomScopeDecorator } from 'opuscapita-showroom-client';

@showroomScopeDecorator
class StickyNodeSCOPE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      ref: null,
      isNowrap: true
    }
  }

  handleRef(ref) {
    if (!this.state.ref) {
      this.setState({ ref });
    }
  }

  render() {
    return (
      <div>
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

export default StickyNodeSCOPE;
