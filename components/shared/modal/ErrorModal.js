import React from 'react';
import * as Updates from 'expo-updates';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';
import { Modal, ModalHeader, ModalFooter } from './baseModal';
import CustomText from '../Text/CustomText';

const ErrorModal = ({ isVisible, closeModal }) => {
  const _restartApp = async () => {
    closeModal();
    await Updates.reloadAsync();
  };

  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      <ModalHeader>
        <CustomText
          size={20}
          style={styles.title}
          children={$t('error.somethingWrong')}
        />
      </ModalHeader>
      <ModalFooter containerStyle={styles.footer}>
        <TouchableOpacity onPress={closeModal} style={styles.cancelBtn}>
          <CustomText children={$t('error.cancel')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={_restartApp} style={styles.restartBtn}>
          <CustomText children={$t('error.restart')} />
        </TouchableOpacity>
      </ModalFooter>
    </Modal>
  );
};

export default ErrorModal;

ErrorModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center'
  },
  footer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 24
  },
  cancelBtn: {
    paddingHorizontal: 24,
    opacity: 0.5
  },
  restartBtn: {
    paddingHorizontal: 24
  }
});
