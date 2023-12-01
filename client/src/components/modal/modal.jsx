import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    default:
      return null;
  }
  return (
    <div>
      { component }
      <div className="modal-background" onClick={closeModal}>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);