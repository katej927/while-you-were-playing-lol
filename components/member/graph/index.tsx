import { FC } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel } from 'victory';

import { convertLeftAxisTickValues, convertRightAxisTickValues, convertData } from './_shared';
import { IEachMatchTime } from 'types';

import * as S from './graph.styles';
import { colors, font } from 'styles/constants';

interface IProps {
  playinDate: IEachMatchTime[];
}

const Graph: FC<IProps> = ({ playinDate }) => {
  const convertedLeftAxisTickValues = convertLeftAxisTickValues(playinDate);
  const convertedRightAxisTickValues = convertRightAxisTickValues(playinDate);
  const convertedData = convertData(playinDate);

  console.log('convertedRightAxisTickValues', convertedRightAxisTickValues);

  return (
    <div css={S.container}>
      <VictoryChart domainPadding={20} padding={{ left: 62 }}>
        <VictoryAxis
          tickValues={convertedLeftAxisTickValues}
          tickLabelComponent={
            <VictoryLabel style={{ fill: colors.gray103, fontSize: 10, fontFamily: 'Spoqa Han Sans Neo' }} />
          }
        />
        <VictoryBar
          data={convertedData}
          x='gameCreation'
          y='gameDuration'
          horizontal
          barWidth={20}
          style={{ data: { fill: ({ datum }) => datum.fill } }}
        />
        <VictoryAxis
          tickFormat={convertedRightAxisTickValues}
          offsetX={450}
          tickLabelComponent={
            <VictoryLabel style={{ fill: colors.white001, fontSize: 10, fontFamily: 'Spoqa Han Sans Neo' }} />
          }
        />
      </VictoryChart>
    </div>
  );
};

export default Graph;
