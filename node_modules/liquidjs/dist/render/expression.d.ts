import { QuotedToken } from '../tokens/quoted-token';
import { Token } from '../tokens/token';
import { Context } from '../context/context';
export declare class Expression {
    private postfix;
    constructor(tokens: IterableIterator<Token>);
    evaluate(ctx: Context, lenient: boolean): Generator<unknown, unknown, unknown>;
}
export declare function evalToken(token: Token | undefined, ctx: Context, lenient?: boolean): any;
export declare function evalQuotedToken(token: QuotedToken): string;
