import {IchartData} from 'App';

export interface RangeSliderProps {
  data: IchartData[];
  onChange: (args: IchartData[]) => void;
  title: string;
  subTitle: string;
}
