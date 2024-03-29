import RangeSlider from '@Screens/RangeSlider/RangeSlider';
import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export interface IchartData {
  value: number;
  amount: number;
}

const chartData: IchartData[] = [
  {value: 10, amount: 4},
  {value: 12, amount: 2},
  {value: 15, amount: 15},
  {value: 100, amount: 4},
  {value: 120, amount: 30},
  {value: 130, amount: 20},
  {value: 140, amount: 10},
  {value: 160, amount: 30},
  {value: 60, amount: 1},
  {value: 30, amount: 4},
  {value: 88, amount: 20},
  {value: 42, amount: 15},
  {value: 90, amount: 4},
  {value: 50, amount: 1},
];

const App: React.FC = () => {
  const handleData = useCallback((data: IchartData[]) => {
    //rangeData {value:number,amount:number}
    console.log('rangeData :-', data);
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.container}>
        <RangeSlider
          data={chartData}
          onChange={handleData}
          title={'Price range'}
          subTitle={'Nightly prices including fees and taxes'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
});

export default App;
