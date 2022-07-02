export const colors = {
  black001: '#111',
  black002: 'black',
  gray100: 'rgb(36, 36, 42)',
  gray101: 'rgb(49, 49, 60)',
  gray102: 'rgb(40, 40, 48)',
  gray103: 'rgb(103, 102, 118)',
  gray104: 'rgb(81, 81, 99)',
  gray105: '#333',
  charcoal001: '#484848',
  lightgray100: 'rgb(195, 195, 211)',
  lightgray101: 'rgba(220, 219, 224, 1)',
  white001: 'rgb(255, 255, 255)',
  theme: 'rgb(124, 71, 233)',
  lightPurple: 'rgb(192, 165, 255)',
  blue: 'rgb(30, 161, 247)',
  lightBlue: 'rgb(34, 184, 207)',
  deepBlue: '#007CF0',
  neonBlue: '#00DFD8',
  turquoise: 'rgb(0, 187, 163)',
  lightGreen: 'rgb(127, 208, 71)',
  yellow: 'rgb(255, 193, 31)',
  orange: 'rgb(255, 121, 5)',
  deepOrange: '#FF4D4D',
  red: 'rgb(240, 101, 149)',
  error: '#E84057',
  hotPink: '#FF0080',
  kakao: '#FEE500',
  facebook: '#1877F2',
  twitter: '#1D9BF0',
};

export const sizes = {
  borderRadius: '4px',
  margin: '8px',
  padding: '16px',
  maxWidth: '880px',
};

export const font = {
  small: '12px',
  medium: '14px',
  regular: '16px',
  large: '24px',
};

export const font_weight = {
  medium: 500,
  bold: 600,
};

export const modal = {
  padding: '40px',
  closeIcon: `position: absolute;
  	top: 32px;
  	right: 32px;
  	cursor: pointer;`,
  title: `margin-bottom: 40px;
  font-size: ${font.large};
  font-weight: ${font_weight.medium};
  text-align: center;
	`,
  button: `width: 100%;
  height: 48px;
  border: 0;
  border-radius: ${sizes.borderRadius};
  background-color: ${colors.theme};
  color: ${colors.white001};
  font-size: ${font.regular};
  font-weight: 800;
  outline: none;
  cursor: pointer;`,
};
