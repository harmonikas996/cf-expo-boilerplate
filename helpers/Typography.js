import { FONT_FAMILY, TEXT_DECORATION_LINE } from '../constants/Typography';

export const getFontFamily = variant => ({ fontFamily: FONT_FAMILY[variant] });

export const getColor = color => ({ color });

export const getFontSize = fontSize => ({ fontSize });

export const getTextDecorationLine = decorationLine => ({
  textDecorationLine: TEXT_DECORATION_LINE[decorationLine]
});

export const getCustomStyle = style => (style?.length ? [...style] : style);
