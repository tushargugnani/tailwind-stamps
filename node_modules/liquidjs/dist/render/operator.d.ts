import { Context } from '../context/context';
export interface Operators {
    [key: string]: (lhs: any, rhs: any, ctx: Context) => boolean;
}
export declare const defaultOperators: Operators;
