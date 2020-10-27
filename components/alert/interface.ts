/**
 * @description: 类型声明文件
 * @author: cnn
 * @createTime: 2020/10/27 10:57
 **/
export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  /**
   * Set this to change alert kind
   * @default info
  **/
  kind?: 'info' | 'positive' | 'negative' | 'warning'
}
