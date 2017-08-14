
import {Store} from 'tough-cookie';

declare var RedisCookieStore: RedisCookieStore.RedisCookieStoreStatic;

export = RedisCookieStore;

declare namespace RedisCookieStore {
    interface RedisCookieStoreStatic {
        new (redisClient: any, id?: string | number): RedisCookieStore;
    }

    interface RedisCookieStore extends Store {
        getKeyName(domain: string, path?: string): string;
    }
}
