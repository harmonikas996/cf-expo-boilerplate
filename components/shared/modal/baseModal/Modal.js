import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';

const ModalWrapper = ({
  isVisible,
  closeModal,
  children,
  backgroundColor = 'white'
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={closeModal}
      transparent
    >
      <View style={styles.container}>
        <View style={[styles.modalWrap, { backgroundColor }]}>{children}</View>
      </View>
    </Modal>
  );
};

export default ModalWrapper;

ModalWrapper.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  backgroundColor: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.5)',
    flexGrow: 1,
    justifyContent: 'center'
  },
  modalWrap: {
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 20
  }
});
