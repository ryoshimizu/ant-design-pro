import { TooltipProps } from 'antd/lib/tooltip';
import React from 'react';

export interface IEllipsisTooltipProps extends TooltipProps {
  title?: undefined;
  overlayStyle?: undefined;
}

export interface IEllipsisProps {
  tooltip?: boolean | IEllipsisTooltipProps;
  length?: number;
  lines?: number;
  style?: React.CSSProperties;
  className?: string;
  fullWidthRecognition?: boolean;
}

export function getStrFullLength(str: string): number;
export function cutStrByFullLength(str: string, maxLength: number): string;

export default class Ellipsis extends React.Component<IEllipsisProps, any> {}
