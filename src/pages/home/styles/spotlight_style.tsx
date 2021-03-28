import { StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 600
  },
  img: {
    height: 600,
    width: Dimensions.get('window').width,
    resizeMode: "cover",
  },
  mask: {
    height: 600,
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  maskItems: {
    height: 100,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 15
  }
});


export default styles;
