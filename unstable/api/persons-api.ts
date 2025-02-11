/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
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
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ItemFields } from '../models';
// @ts-ignore
import { ItemFilter } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * PersonsApi - axios parameter creator
 * @export
 */
export const PersonsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get person by name.
         * @param {string} name Person name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPerson: async (name: string, userId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getPerson', 'name', name)
            const localVarPath = `/Persons/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
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
         * @summary Gets all persons.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not. userId is required.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {Array<string>} [excludePersonTypes] Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited.
         * @param {Array<string>} [personTypes] Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited.
         * @param {string} [appearsInItemId] Optional. If specified, person results will be filtered on items related to said persons.
         * @param {string} [userId] User id.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPersons: async (limit?: number, searchTerm?: string, fields?: Array<ItemFields>, filters?: Array<ItemFilter>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, excludePersonTypes?: Array<string>, personTypes?: Array<string>, appearsInItemId?: string, userId?: string, enableImages?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Persons`;
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (searchTerm !== undefined) {
                localVarQueryParameter['searchTerm'] = searchTerm;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (filters) {
                localVarQueryParameter['filters'] = filters;
            }

            if (isFavorite !== undefined) {
                localVarQueryParameter['isFavorite'] = isFavorite;
            }

            if (enableUserData !== undefined) {
                localVarQueryParameter['enableUserData'] = enableUserData;
            }

            if (imageTypeLimit !== undefined) {
                localVarQueryParameter['imageTypeLimit'] = imageTypeLimit;
            }

            if (enableImageTypes) {
                localVarQueryParameter['enableImageTypes'] = enableImageTypes;
            }

            if (excludePersonTypes) {
                localVarQueryParameter['excludePersonTypes'] = excludePersonTypes;
            }

            if (personTypes) {
                localVarQueryParameter['personTypes'] = personTypes;
            }

            if (appearsInItemId !== undefined) {
                localVarQueryParameter['appearsInItemId'] = appearsInItemId;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
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
 * PersonsApi - functional programming interface
 * @export
 */
export const PersonsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PersonsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get person by name.
         * @param {string} name Person name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPerson(name: string, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPerson(name, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets all persons.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not. userId is required.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {Array<string>} [excludePersonTypes] Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited.
         * @param {Array<string>} [personTypes] Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited.
         * @param {string} [appearsInItemId] Optional. If specified, person results will be filtered on items related to said persons.
         * @param {string} [userId] User id.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPersons(limit?: number, searchTerm?: string, fields?: Array<ItemFields>, filters?: Array<ItemFilter>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, excludePersonTypes?: Array<string>, personTypes?: Array<string>, appearsInItemId?: string, userId?: string, enableImages?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPersons(limit, searchTerm, fields, filters, isFavorite, enableUserData, imageTypeLimit, enableImageTypes, excludePersonTypes, personTypes, appearsInItemId, userId, enableImages, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PersonsApi - factory interface
 * @export
 */
export const PersonsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PersonsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get person by name.
         * @param {string} name Person name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPerson(name: string, userId?: string, options?: any): AxiosPromise<BaseItemDto> {
            return localVarFp.getPerson(name, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all persons.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not. userId is required.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {Array<string>} [excludePersonTypes] Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited.
         * @param {Array<string>} [personTypes] Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited.
         * @param {string} [appearsInItemId] Optional. If specified, person results will be filtered on items related to said persons.
         * @param {string} [userId] User id.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPersons(limit?: number, searchTerm?: string, fields?: Array<ItemFields>, filters?: Array<ItemFilter>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, excludePersonTypes?: Array<string>, personTypes?: Array<string>, appearsInItemId?: string, userId?: string, enableImages?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getPersons(limit, searchTerm, fields, filters, isFavorite, enableUserData, imageTypeLimit, enableImageTypes, excludePersonTypes, personTypes, appearsInItemId, userId, enableImages, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PersonsApi - interface
 * @export
 * @interface PersonsApi
 */
export interface PersonsApiInterface {
    /**
     * 
     * @summary Get person by name.
     * @param {string} name Person name.
     * @param {string} [userId] Optional. Filter by user id, and attach user data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonsApiInterface
     */
    getPerson(name: string, userId?: string, options?: any): AxiosPromise<BaseItemDto>;

    /**
     * 
     * @summary Gets all persons.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {string} [searchTerm] The search term.
     * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
     * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply.
     * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not. userId is required.
     * @param {boolean} [enableUserData] Optional, include user data.
     * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
     * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
     * @param {Array<string>} [excludePersonTypes] Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited.
     * @param {Array<string>} [personTypes] Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited.
     * @param {string} [appearsInItemId] Optional. If specified, person results will be filtered on items related to said persons.
     * @param {string} [userId] User id.
     * @param {boolean} [enableImages] Optional, include image information in output.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonsApiInterface
     */
    getPersons(limit?: number, searchTerm?: string, fields?: Array<ItemFields>, filters?: Array<ItemFilter>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, excludePersonTypes?: Array<string>, personTypes?: Array<string>, appearsInItemId?: string, userId?: string, enableImages?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult>;

}

/**
 * PersonsApi - object-oriented interface
 * @export
 * @class PersonsApi
 * @extends {BaseAPI}
 */
export class PersonsApi extends BaseAPI implements PersonsApiInterface {
    /**
     * 
     * @summary Get person by name.
     * @param {string} name Person name.
     * @param {string} [userId] Optional. Filter by user id, and attach user data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonsApi
     */
    public getPerson(name: string, userId?: string, options?: any) {
        return PersonsApiFp(this.configuration).getPerson(name, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all persons.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {string} [searchTerm] The search term.
     * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
     * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply.
     * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not. userId is required.
     * @param {boolean} [enableUserData] Optional, include user data.
     * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
     * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
     * @param {Array<string>} [excludePersonTypes] Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited.
     * @param {Array<string>} [personTypes] Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited.
     * @param {string} [appearsInItemId] Optional. If specified, person results will be filtered on items related to said persons.
     * @param {string} [userId] User id.
     * @param {boolean} [enableImages] Optional, include image information in output.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonsApi
     */
    public getPersons(limit?: number, searchTerm?: string, fields?: Array<ItemFields>, filters?: Array<ItemFilter>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, excludePersonTypes?: Array<string>, personTypes?: Array<string>, appearsInItemId?: string, userId?: string, enableImages?: boolean, options?: any) {
        return PersonsApiFp(this.configuration).getPersons(limit, searchTerm, fields, filters, isFavorite, enableUserData, imageTypeLimit, enableImageTypes, excludePersonTypes, personTypes, appearsInItemId, userId, enableImages, options).then((request) => request(this.axios, this.basePath));
    }
}
