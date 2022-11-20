import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingRight: 10,
    paddingVertical: 10,
    marginRight: 15,
    borderRadius: 50,
  },
  container: {
    backgroundColor: '#5D5FEF',
    minHeight: 60,
    elevation: 7,
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  title: {
    fontFamily: 'Lekton-Regular',
    fontSize: 20,
    lineHeight: 24,
    color: 'white',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
