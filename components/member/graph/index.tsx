import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel } from 'victory';

import { convertLeftAxisTickValues, convertRightAxisTickValues, convertData } from './_shared';
import { IEachMatchTime } from 'types';
import { GRAPH_OPTIONS } from './_shared';

import * as S from './graph.styles';

interface IProps {
  playinDate: IEachMatchTime[];
}

const Graph = ({ playinDate }: IProps) => {
  const convertedLeftAxisTickValues = convertLeftAxisTickValues(playinDate);
  const convertedRightAxisTickValues = convertRightAxisTickValues(playinDate);
  const convertedData = convertData(playinDate);

  return (
    <div css={S.container}>
      <VictoryChart {...GRAPH_OPTIONS.chart}>
        <VictoryAxis
          tickValues={convertedLeftAxisTickValues}
          tickLabelComponent={<VictoryLabel {...GRAPH_OPTIONS.leftAxisLabel} />}
        />
        <VictoryBar data={convertedData} style={{ data: { fill: ({ datum }) => datum.fill } }} {...GRAPH_OPTIONS.bar} />
        <VictoryAxis
          tickFormat={convertedRightAxisTickValues}
          tickLabelComponent={<VictoryLabel {...GRAPH_OPTIONS.rightAxisLabel} />}
          {...GRAPH_OPTIONS.rightAxis}
        />
      </VictoryChart>
    </div>
  );
};

export default Graph;
