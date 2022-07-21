import { Operators } from '../render/operator';
export interface Trie {
    [key: string]: any;
}
export declare function createTrie(operators: Operators): Trie;
