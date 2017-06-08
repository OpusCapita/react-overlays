import React, { Component } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';

@showroomScopeDecorator
class SimpleModalSCOPE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false
    }
  }

  handleToggleShowModal() {
    this.setState({ isShowModal: !this.state.isShowModal });
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: '12px' }}>
          <button
            type="button"
            onClick={this.handleToggleShowModal.bind(this)}
          >
            Toggle modal
          </button>
        </div>
        <div>
          {this._renderChildren()}
        </div>
      </div>
    );
  }
}

export default SimpleModalSCOPE;
