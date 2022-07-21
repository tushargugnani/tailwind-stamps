import { Context } from '../../context/context';
export interface HashValue {
    [key: string]: any;
}
/**
 * Key-Value Pairs Representing Tag Arguments
 * Example:
 *    For the markup `, foo:'bar', coo:2 reversed %}`,
 *    hash['foo'] === 'bar'
 *    hash['coo'] === 2
 *    hash['reversed'] === undefined
 */
export declare class Hash {
    hash: HashValue;
    constructor(markup: string, jekyllStyle?: boolean);
    render(ctx: Context): Generator<unknown, HashValue, unknown>;
}
