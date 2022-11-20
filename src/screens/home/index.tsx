import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  useColorScheme,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/actions';
import {Container, NavigationBar} from '../../components';
import {styles} from '../../assets/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import di from '../../di';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
// import {styles} from '../../assets/styles'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const Home = (props: any) => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.white,
  };

  useEffect(() => {
    (async () => {
      const data = await di.character.getAllCharacter();
      if (data) {
        setLoading(false);
        setDataSource(data.results);
      } else {
        setLoading(false);
        setDataSource([]);
      }
    })();
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.setDetailCharacter(item.id);
          props.navigation.navigate('Detail');
        }}>
        <View key={item.id} style={styles.itemCharacter}>
          <FastImage
            source={{uri: `${item.image}`}}
            style={styles.avatar}
            resizeMode={'contain'}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.species}>{item.species}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const shimmerLoading = () => {
    let placeholder = [],
      i;
    for (i = 0; i < 6; i++) {
      placeholder.push(
        <View key={i} style={styles.itemCharacter}>
          <ShimmerPlaceHolder style={styles.avatar} />
          <View style={styles.info}>
            <ShimmerPlaceHolder style={styles.nameShimmer} />
            <ShimmerPlaceHolder style={styles.speciesShimmer} />
          </View>
        </View>,
      );
    }
    return placeholder;
  };

  const listCharacters = () => {
    return (
      <FlatList
        data={dataSource}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />
    );
  };

  return (
    <Container>
      <View style={backgroundStyle}>
        <NavigationBar title={'Characters'} back={false} onPress={() => {}} />
        <View style={styles.wrapper}>
          {isLoading ? shimmerLoading() : listCharacters()}
        </View>
      </View>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(null, mapDispatchToProps)(Home);
