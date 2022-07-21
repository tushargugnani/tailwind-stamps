import { Expression } from '../render/expression';
import { Filter } from './filter/filter';
import { Context } from '../context/context';
import { Liquid } from '../liquid';
export declare class Value {
    readonly filters: Filter[];
    readonly initial: Expression;
    /**
     * @param str the value to be valuated, eg.: "foobar" | truncate: 3
     */
    constructor(str: string, liquid: Liquid);
    value(ctx: Context, lenient: boolean): Generator<unknown, unknown, unknown>;
}
