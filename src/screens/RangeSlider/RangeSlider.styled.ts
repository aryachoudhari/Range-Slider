import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    padding: 10,
    height: 220,
    maxWidth: 500,
  },
  pillar: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
  },
  slider: {
    height: 7,
    width: '100%',
  },
  priceText: {
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: 5,
    color: 'black',
  },
  priceTitle: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.7)',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    fontSize: 16,
    color: 'black',
  },
  GraphContainer: {
    position: 'absolute',
    left: -10,
    right: -10,
    bottom: 10,
  },
  bar: {
    marginHorizontal: 2,
    alignSelf: 'flex-end',
    maxHeight: 200,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
  },
  rangeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  inputWrapper: {
    borderRadius: 8,
    borderWidth: 1.5,
    flex: 1,
    padding: 10,
    borderColor: 'rgba(0,0,0,0.5)',
  },
  separator: {
    width: 20,
  },
});
