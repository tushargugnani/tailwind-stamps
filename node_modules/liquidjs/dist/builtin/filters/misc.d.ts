import { identify } from '../../util/underscore';
import { FilterImpl } from '../../template/filter/filter-impl';
export declare function Default<T1 extends boolean, T2>(this: FilterImpl, value: T1, defaultValue: T2, ...args: Array<[string, any]>): T1 | T2;
export declare function json(value: any): string;
export declare const raw: typeof identify;
