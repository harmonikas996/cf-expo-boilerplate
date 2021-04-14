import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import { Modal, ModalBody, ModalFooter } from './baseModal';
import CustomText from '../Text/CustomText';

const NoPermissionsForCameraModal = ({ isVisible, closeModal }) => {
  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      <ModalBody>
        <CustomText
          style={styles.bodyText}
          children={$t('profile.updateUser.noPermissions')}
        />
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <CustomText style={styles.okBtn} children={$t('common.ok')} />
        </TouchableOpacity>
      </ModalFooter>
    </Modal>
  );
};

export default NoPermissionsForCameraModal;

NoPermissionsForCameraModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func
};

const styles = StyleSheet.create({
  bodyText: {
    textAlign: 'center'
  },
  okBtn: {
    textAlign: 'center',
    marginTop: 24
  }
});
