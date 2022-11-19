import React, {type PropsWithChildren} from 'react';
import {connect} from 'react-redux';
import {ScrollView, useColorScheme} from 'react-native';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/actions';
import {Container, NavigationBar} from '../../components';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
// import {styles} from '../../assets/styles';

const Home: React.FC<PropsWithChildren<{}>> = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Container>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <NavigationBar title={'Characters'} />
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  dataMovies: state.dataMovies,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
