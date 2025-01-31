/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BaseItemDto } from '../models';
// @ts-ignore
import { MetadataEditorInfo } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { UNKNOWN_BASE_TYPE } from '../models';
/**
 * ItemUpdateApi - axios parameter creator
 * @export
 */
export const ItemUpdateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets metadata editor info for an item.
         * @param {string} itemId The item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetadataEditorInfo: async (itemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getMetadataEditorInfo', 'itemId', itemId)
            const localVarPath = `/Items/{itemId}/MetadataEditor`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates an item.
         * @param {string} itemId The item id.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The new item properties.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem: async (itemId: string, uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateItem', 'itemId', itemId)
            // verify required parameter 'uNKNOWNBASETYPE' is not null or undefined
            assertParamExists('updateItem', 'uNKNOWNBASETYPE', uNKNOWNBASETYPE)
            const localVarPath = `/Items/{itemId}`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(uNKNOWNBASETYPE, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates an item\'s content type.
         * @param {string} itemId The item id.
         * @param {string} [contentType] The content type of the item.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItemContentType: async (itemId: string, contentType?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateItemContentType', 'itemId', itemId)
            const localVarPath = `/Items/{itemId}/ContentType`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (contentType !== undefined) {
                localVarQueryParameter['contentType'] = contentType;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ItemUpdateApi - functional programming interface
 * @export
 */
export const ItemUpdateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ItemUpdateApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets metadata editor info for an item.
         * @param {string} itemId The item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetadataEditorInfo(itemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataEditorInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMetadataEditorInfo(itemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates an item.
         * @param {string} itemId The item id.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The new item properties.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateItem(itemId: string, uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateItem(itemId, uNKNOWNBASETYPE, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates an item\'s content type.
         * @param {string} itemId The item id.
         * @param {string} [contentType] The content type of the item.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateItemContentType(itemId: string, contentType?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateItemContentType(itemId, contentType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ItemUpdateApi - factory interface
 * @export
 */
export const ItemUpdateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ItemUpdateApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets metadata editor info for an item.
         * @param {string} itemId The item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetadataEditorInfo(itemId: string, options?: any): AxiosPromise<MetadataEditorInfo> {
            return localVarFp.getMetadataEditorInfo(itemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an item.
         * @param {string} itemId The item id.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The new item properties.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem(itemId: string, uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void> {
            return localVarFp.updateItem(itemId, uNKNOWNBASETYPE, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an item\'s content type.
         * @param {string} itemId The item id.
         * @param {string} [contentType] The content type of the item.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItemContentType(itemId: string, contentType?: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateItemContentType(itemId, contentType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ItemUpdateApi - interface
 * @export
 * @interface ItemUpdateApi
 */
export interface ItemUpdateApiInterface {
    /**
     * 
     * @summary Gets metadata editor info for an item.
     * @param {string} itemId The item id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemUpdateApiInterface
     */
    getMetadataEditorInfo(itemId: string, options?: any): AxiosPromise<MetadataEditorInfo>;

    /**
     * 
     * @summary Updates an item.
     * @param {string} itemId The item id.
     * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The new item properties.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemUpdateApiInterface
     */
    updateItem(itemId: string, uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Updates an item\'s content type.
     * @param {string} itemId The item id.
     * @param {string} [contentType] The content type of the item.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemUpdateApiInterface
     */
    updateItemContentType(itemId: string, contentType?: string, options?: any): AxiosPromise<void>;

}

/**
 * ItemUpdateApi - object-oriented interface
 * @export
 * @class ItemUpdateApi
 * @extends {BaseAPI}
 */
export class ItemUpdateApi extends BaseAPI implements ItemUpdateApiInterface {
    /**
     * 
     * @summary Gets metadata editor info for an item.
     * @param {string} itemId The item id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemUpdateApi
     */
    public getMetadataEditorInfo(itemId: string, options?: any) {
        return ItemUpdateApiFp(this.configuration).getMetadataEditorInfo(itemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an item.
     * @param {string} itemId The item id.
     * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The new item properties.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemUpdateApi
     */
    public updateItem(itemId: string, uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any) {
        return ItemUpdateApiFp(this.configuration).updateItem(itemId, uNKNOWNBASETYPE, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an item\'s content type.
     * @param {string} itemId The item id.
     * @param {string} [contentType] The content type of the item.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemUpdateApi
     */
    public updateItemContentType(itemId: string, contentType?: string, options?: any) {
        return ItemUpdateApiFp(this.configuration).updateItemContentType(itemId, contentType, options).then((request) => request(this.axios, this.basePath));
    }
}
