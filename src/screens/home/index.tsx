import React, {type PropsWithChildren, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useColorScheme, Image, FlatList, View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/actions';
import {Container, NavigationBar} from '../../components';
import {styles} from '../../assets/styles'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import di from '../../di';
// import {styles} from '../../assets/styles';

const Home: React.FC<PropsWithChildren<{}>> = ({}) => {
  const [dataSource, setDataSource] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    (async () => {
      const data = await di.character.getAllCharacter()
      if (data) {
        setDataSource(data.results);
      }
    })()
  }, []);

  const renderItem = ({item}: any) => {
    return(
      <View key={item.id} style={styles.itemCharacter}>
        <Image source={{uri: `${item.image}`}} style={styles.avatar} resizeMode={'contain'} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.species}>{item.species}</Text>
        </View>
      </View>
    )
  }

  return (
    <Container>
      <View style={backgroundStyle}>
        <NavigationBar
          title={'Characters'}
          back={false}
          onPress={() => {}}
        />
        <View style={styles.wrapper}>
        <FlatList
          data={dataSource}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  dataMovies: state.dataMovies,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
