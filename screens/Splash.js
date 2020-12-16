import React from 'react';
import {Image, Text, View} from 'react-native';
import {THEME_COLORS} from '../Theme';

const Splash = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home');
    }, 1500);
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: THEME_COLORS.background,
      }}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../assets/stew.png')}
      />
      <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 20}}>
        {'Stew Recipes'}
      </Text>
    </View>
  );
};

export default Splash;
