import { RuntimebuzzArticleEntityBase } from '../RuntimebuzzArticleEntityBase';
import type { RuntimebuzzArticleSDK } from '../RuntimebuzzArticleSDK';
import type { Control } from '../types';
import type { ReadFinderIndex, ReadFinderIndexLoadMatch } from '../RuntimebuzzArticleTypes';
declare class ReadFinderIndexEntity extends RuntimebuzzArticleEntityBase<ReadFinderIndex> {
    constructor(client: RuntimebuzzArticleSDK, entopts: any);
    make(this: ReadFinderIndexEntity): ReadFinderIndexEntity;
    load(this: any, reqmatch?: ReadFinderIndexLoadMatch, ctrl?: Control): Promise<ReadFinderIndexEntity>;
}
export { ReadFinderIndexEntity };
