import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import {
  getColor,
  getCustomStyle,
  getFontFamily,
  getFontSize,
  getTextDecorationLine
} from '../../../helpers/Typography';
import {
  FONT_FAMILY,
  TEXT_DECORATION_LINE
} from '../../../constants/Typography';

const CustomText = ({
  children,
  style,
  variant = 'regular',
  color = 'black',
  size = 14,
  textDecorationLine = 'none',
  ...props
}) => {
  return (
    <Text
      style={[
        getFontFamily(variant),
        getColor(color),
        getFontSize(size),
        getTextDecorationLine(textDecorationLine),
        getCustomStyle(style)
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

CustomText.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.keys(FONT_FAMILY)),
  color: PropTypes.string,
  size: PropTypes.number,
  textDecorationLine: PropTypes.oneOf(Object.keys(TEXT_DECORATION_LINE)),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default CustomText;
