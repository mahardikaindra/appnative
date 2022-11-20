/**
 * Sample React Native Container
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Container: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <SafeAreaView style={styles.top} />
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#5D5FEF'} />
        {children}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#5D5FEF',
  },
});

export default Container;
