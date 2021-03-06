
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%'
  }
});
