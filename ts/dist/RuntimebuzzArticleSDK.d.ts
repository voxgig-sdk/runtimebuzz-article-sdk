import { ReadFinderIndexEntity } from './entity/ReadFinderIndexEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './RuntimebuzzArticleTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RuntimebuzzArticleEntityBase } from './RuntimebuzzArticleEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class RuntimebuzzArticleSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    ReadFinderIndex(entopts?: Record<string, any>): ReadFinderIndexEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RuntimebuzzArticleSDK;
    tester(testopts?: any, sdkopts?: any): RuntimebuzzArticleSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RuntimebuzzArticleSDK;
export { stdutil, config, BaseFeature, RuntimebuzzArticleEntityBase, RuntimebuzzArticleSDK, SDK, };
