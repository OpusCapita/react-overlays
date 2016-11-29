import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from '@opuscapita/showroom-client';
import Button from '@opuscapita/react-ui-buttons/lib/Button';

@showroomScopeDecorator
class SimpleModalSCOPE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false
    }
  };

  handleToggleShowModal() {
    this.setState({ isShowModal: !this.state.isShowModal });
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: '12px' }}>
            <Button
              bgColor="#e70"
              color="#fff"
              label="Toggle modal"
              paper={true}
              onClick={this.handleToggleShowModal.bind(this)}
            />
        </div>
        <div>
          {this._renderChildren()}
        </div>
      </div>
    );
  }
}

export default SimpleModalSCOPE;
