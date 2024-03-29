import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

const RailSelected = () => <View style={styles.root} />;

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 2,
    backgroundColor: 'black',
    borderRadius: 2,
  },
});
