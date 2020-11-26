import React from 'react';
import PropTypes from 'prop-types';
import { Image, Platform, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import $t from 'i18n';
import { logout } from '../../store/actions/UserActions';
import { userSelector } from '../../store/selectors/UserSelector';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const user = useSelector(userSelector());

  const _signOutAsync = async () => {
    handleLogout();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text>{$t('helloWorld')}</Text>
          {user && <Text>{user.email}</Text>}
          <Image
            source={
              __DEV__
                ? require('../../assets/images/robot-dev.png')
                : require('../../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <Button title="SIGN OUT" onPress={_signOutAsync} />

        <Button onPress={() => navigation.navigate('ChangePassword')} title="Change Password" />
      </ScrollView>

      <View style={styles.tabBarInfoContainer} />
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerShown: false
};

HomeScreen.propTypes = {
  navigation: PropTypes.object
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  contentContainer: {
    paddingTop: 30
  },

  tabBarInfoContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  welcomeImage: {
    height: 80,
    marginLeft: -10,
    marginTop: 3,
    resizeMode: 'contain',
    width: 100
  }
});
