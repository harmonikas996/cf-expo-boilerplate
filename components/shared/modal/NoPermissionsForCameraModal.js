import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import { Modal, ModalHeader, ModalBody, ModalFooter } from './baseModal';

const NoPermissionsForCameraModal = ({ isVisible, closeModal }) => {
  return (
    <Modal isVisible={isVisible} onRequestClose={closeModal}>
      <ModalHeader>
        <Text>{$t('profile.updateUser.noPermissions')}</Text>
      </ModalHeader>
      <ModalBody>
        <Text>{$t('profile.updateUser.noPermissions')}</Text>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <Text>{$t('common.ok')}</Text>
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