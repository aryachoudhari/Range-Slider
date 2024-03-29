/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Dimensions, TextInput, Keyboard} from 'react-native';
import RangeSliderRN from 'rn-range-slider';

import Thumb from '@Components/Thumb';
import Rail from '@Components/Rail';
import RailSelected from '@Components/RailSelected';
import {styles} from './RangeSlider.styled';
import {RangeSliderProps} from './RangeSlider.types';

const RangeSlider: React.FC<RangeSliderProps> = ({
  data,
  onChange,
  title,
  subTitle,
}) => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);

  const maxmimumRangePrice = 90;
  let numOfPiller =
    maxPrice - minPrice >= maxmimumRangePrice
      ? maxPrice / minPrice
      : minPrice / 2;

  useEffect(() => {
    const initialValue = {minValue: Infinity, maxValue: -Infinity};

    const {minValue, maxValue} = data.reduce(
      (accumulator, current) => ({
        minValue: Math.min(accumulator.minValue, current.value),
        maxValue: Math.max(accumulator.maxValue, current.value),
      }),
      initialValue,
    );

    setMinPrice(minValue);
    setLow(minValue);
    setMaxPrice(maxValue);
    setHigh(maxValue);
  }, [data]);

  const handleValueChange = useCallback(
    (newLow: number, newHigh: number) => {
      const chartData = data.filter(
        item => item.value <= newHigh && item.value >= newLow,
      );

      onChange(chartData);
      setLow(newLow);
      setHigh(newHigh);
    },
    [data, onChange],
  );

  const numbersArray = Array.from(
    {length: Math.ceil((maxPrice - minPrice) / numOfPiller) + 1},
    (_, index) => minPrice + index * numOfPiller,
  );

  const renderGraphView = (number: number, index: number, height: number) => {
    const containerWidth = Dimensions.get('window').width;
    const maxBarWidth = containerWidth / (numbersArray.length * 1.6);

    return (
      <View
        key={index}
        style={{
          height: height,
          width: maxBarWidth,
          backgroundColor:
            low > number
              ? 'rgba(0,0,0,0.5)'
              : high < number
              ? 'rgba(0,0,0,0.5)'
              : 'black',
          marginHorizontal: 2,
          alignSelf: 'flex-end',
          maxHeight: 200,
          borderTopRightRadius: 2,
          borderTopLeftRadius: 2,
        }}
      />
    );
  };

  const handleLowInputChange = (value: string) => {
    if (/^[0-9]*$/.test(value)) {
      const numericValue = Number(value);
      if (numericValue >= minPrice) {
        setLow(numericValue);
      }
    }
  };

  const handleHighInputChange = (value: string) => {
    if (/^[0-9]*$/.test(value)) {
      const numericValue = Number(value);
      if (numericValue > low) {
        setHigh(numericValue);
      }
    }
  };

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.pillar}>
          {numbersArray.map((number, index) => {
            const data_index = data.findIndex(item => item.value === number);
            let height = data_index >= 0 ? data[data_index]?.amount * 5 : 0;
            let n_height = 0;
            data.filter(f => {
              if (f.value <= number && f.value > numbersArray[index - 1]) {
                n_height += f.amount;
              }
              return f.value < number;
            });

            return renderGraphView(
              number > maxPrice ? maxPrice : number,
              index,
              n_height > 0 ? n_height * 5 : height,
            );
          })}
          <View style={styles.GraphContainer}>
            <RangeSliderRN
              onTouchStart={() => {
                Keyboard.dismiss();
              }}
              style={styles.slider}
              min={minPrice}
              max={maxPrice}
              step={1}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              onValueChanged={handleValueChange}
              high={high}
              low={low}
            />
          </View>
        </View>
      </View>
      <View style={styles.rangeContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.priceTitle}>Minimum</Text>
          <TextInput
            style={styles.input}
            defaultValue={low.toString()}
            onChangeText={handleLowInputChange}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.inputWrapper}>
          <Text style={styles.priceTitle}>Maximum</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              defaultValue={high.toString()}
              onChangeText={handleHighInputChange}
              keyboardType="number-pad"
            />
            <Text style={styles.priceText}>{high >= maxPrice && '+'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RangeSlider;
