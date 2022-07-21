import { Liquid } from '../liquid';
import { ParseStream } from './parse-stream';
import { Tag } from '../template/tag/tag';
import { Output } from '../template/output';
import { HTML } from '../template/html';
import { Template } from '../template/template';
import { TopLevelToken } from '../tokens/toplevel-token';
import { LookupType } from '../fs/loader';
export default class Parser {
    parseFile: (file: string, sync?: boolean, type?: LookupType, currentFile?: string) => Generator<unknown, Template[], Template[] | string>;
    private liquid;
    private fs;
    private cache?;
    private loader;
    constructor(liquid: Liquid);
    parse(html: string, filepath?: string): Template[];
    parseTokens(tokens: TopLevelToken[]): Template[];
    parseToken(token: TopLevelToken, remainTokens: TopLevelToken[]): Tag | Output | HTML;
    parseStream(tokens: TopLevelToken[]): ParseStream<TopLevelToken>;
    private _parseFileCached;
    private _parseFile;
}
