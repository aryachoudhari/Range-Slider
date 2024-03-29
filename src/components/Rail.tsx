import React, {memo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

const Rail: React.FC = () => <View style={styles.root} />;

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#E4E4E4',
  } as ViewStyle,
});
