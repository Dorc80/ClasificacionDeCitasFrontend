
export interface AuthorResp {
    message: string;
    author: Author;
}

export interface Quote {
    score?: number;
    quote: string;
    _id?: string;
}

export interface Author {
    _id?: string;
    name: string;
    __v?: number;
    quotes?: Quote[];
}

export interface AuthorsResp {
    message: string;
    authors: Author[];
}

export interface Result {
    acknowledged: boolean;
    modifiedCount: number;
    upsertedId?: any;
    upsertedCount: number;
    matchedCount: number;
}

export interface QuoteResp {
    message: string;
    result: Result;
}