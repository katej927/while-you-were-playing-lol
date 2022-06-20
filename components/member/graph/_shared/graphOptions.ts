import { colors } from 'styles/constants';

export const GRAPH_OPTIONS = {
  chart: {
    domainPadding: { x: 10, y: 40 },
    padding: { left: 53 },
    height: 170,
    width: 440,
  },
  leftAxisLabel: {
    style: { fill: colors.gray103, fontSize: 7, fontFamily: 'Spoqa Han Sans Neo' },
    backgroundStyle: { fill: colors.black001, borderRadius: 50 },
    backgroundPadding: { left: 5, right: 5, top: 3, bottom: 3 },
  },
  bar: {
    x: 'gameCreation',
    y: 'gameDuration',
    horizontal: true,
    barWidth: 13,
    animate: {
      duration: 2000,
      onLoad: { duration: 1000 },
    },
  },
  rightAxis: {
    offsetX: 450,
    style: { axis: { stroke: 'none' } },
  },
  rightAxisLabel: { style: { fill: colors.lightgray100, fontSize: 7, fontFamily: 'Spoqa Han Sans Neo' } },
};
