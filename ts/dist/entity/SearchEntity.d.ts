import { RuntimebuzzArticleEntityBase } from '../RuntimebuzzArticleEntityBase';
import type { RuntimebuzzArticleSDK } from '../RuntimebuzzArticleSDK';
import type { Control } from '../types';
import type { Search, SearchLoadMatch } from '../RuntimebuzzArticleTypes';
declare class SearchEntity extends RuntimebuzzArticleEntityBase<Search> {
    constructor(client: RuntimebuzzArticleSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    load(this: any, reqmatch?: SearchLoadMatch, ctrl?: Control): Promise<SearchEntity>;
}
export { SearchEntity };
