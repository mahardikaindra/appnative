import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Container({children}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}

Container.defaultProps = {
  children: null,
};

Container.propTypes = {
  children: PropTypes.node,
};
