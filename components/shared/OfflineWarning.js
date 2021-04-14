import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import $t from 'i18n';
import CustomText from './Text/CustomText';

const OfflineWarning = () => {
  const networkState = useNetInfo();

  return (
    !networkState.isConnected && (
      <View style={styles.container}>
        <CustomText
          size={24}
          color="white"
          children={$t('common.offline.title')}
        />
        <CustomText
          size={14}
          color="white"
          children={$t('common.offline.description')}
          style={styles.description}
        />
      </View>
    )
  );
};

export default OfflineWarning;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    backgroundColor: 'rgba(0,0,0,.9)'
  },
  description: {
    marginTop: 6,
    opacity: 0.5
  }
});
