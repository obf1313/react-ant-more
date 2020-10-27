/**
 * @description: 源文件
 * @author: cnn
 * @createTime: 2020/10/27 10:56
 **/
import React from 'react';
import t from 'prop-types';
import { AlertProps, KindMap } from './interface';

const prefixCls = 'ant-more-alert';
const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

// React.FC 函数组件 Function Component
const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);
Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};
export default Alert;
