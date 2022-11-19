import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    height: 40, width: 40
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Lekton-Bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Lekton-Regular',
  },
  highlight: {
    fontWeight: '700',
    fontFamily: 'Lekton-Italic',
  },
  name: {fontSize: 16, fontFamily: 'Lekton-Bold', color: 'black'},
  species: {fontSize: 14, fontFamily: 'Lekton-Regular', color: 'black'},
  info: {marginHorizontal: 16, alignItems: 'flex-start'},
  itemCharacter: {flexDirection: 'row', minHeight: 40, paddingVertical: 10, alignItems: 'center'},
  wrapper: {margin: 16},
});

export default styles;
