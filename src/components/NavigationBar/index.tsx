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
  TouchableOpacity,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import styles from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavigationBar: React.FC<
  PropsWithChildren<{
    title: string;
    back: boolean;
    onPress: any;
  }>
> = ({title, back, onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const backButton = (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Icon name={'arrow-left'} color={Colors.white} size={16} />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <View style={styles.row}>
          {back && backButton}
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigationBar;
