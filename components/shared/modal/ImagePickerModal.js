import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import { Modal, ModalHeader, ModalBody, ModalFooter } from './baseModal';
import cameraIcon from '../../../assets/images/camera-icon.png';
import imageIcon from '../../../assets/images/image-icon.png';
import CustomText from '../Text/CustomText';

const ImagePickerModal = ({
  isVisible,
  closeModal,
  galleryImport,
  openCamera
}) => {
  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      <ModalHeader>
        <CustomText
          size={20}
          style={styles.title}
          children={$t('profile.updateUser.selectImage')}
        />
      </ModalHeader>
      <ModalBody containerStyle={styles.body}>
        <TouchableOpacity style={styles.actionBtn} onPress={openCamera}>
          <Image source={cameraIcon} />
          <CustomText children={$t('profile.updateUser.takePicture')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={galleryImport}>
          <Image source={imageIcon} />
          <CustomText children={$t('profile.updateUser.importFromGallery')} />
        </TouchableOpacity>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <CustomText style={styles.cancelBtn} children={$t('common.cancel')} />
        </TouchableOpacity>
      </ModalFooter>
    </Modal>
  );
};

export default ImagePickerModal;

ImagePickerModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  openCamera: PropTypes.func,
  galleryImport: PropTypes.func
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center'
  },
  body: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 48
  },
  actionBtn: {
    alignItems: 'center',
    flexGrow: 1
  },
  cancelBtn: {
    textAlign: 'center',
    opacity: 0.5
  }
});
