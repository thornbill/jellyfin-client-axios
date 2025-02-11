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
import { ProblemDetails } from '../models';
// @ts-ignore
import { QuickConnectResult } from '../models';
// @ts-ignore
import { QuickConnectState } from '../models';
/**
 * QuickConnectApi - axios parameter creator
 * @export
 */
export const QuickConnectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Temporarily activates quick connect for five minutes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        activate: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/QuickConnect/Activate`;
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
         * @summary Authorizes a pending quick connect request.
         * @param {string} code Quick connect code to authorize.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize: async (code: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('authorize', 'code', code)
            const localVarPath = `/QuickConnect/Authorize`;
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

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
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
         * @summary Enables or disables quick connect.
         * @param {QuickConnectState} [status] New MediaBrowser.Model.QuickConnect.QuickConnectState.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        available: async (status?: QuickConnectState, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/QuickConnect/Available`;
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

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
         * @summary Attempts to retrieve authentication information.
         * @param {string} secret Secret previously returned from the Initiate endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        connect: async (secret: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'secret' is not null or undefined
            assertParamExists('connect', 'secret', secret)
            const localVarPath = `/QuickConnect/Connect`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (secret !== undefined) {
                localVarQueryParameter['secret'] = secret;
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
         * @summary Deauthorize all quick connect devices for the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deauthorize: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/QuickConnect/Deauthorize`;
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
         * @summary Gets the current quick connect state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatus: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/QuickConnect/Status`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Initiate a new quick connect request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiate: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/QuickConnect/Initiate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * QuickConnectApi - functional programming interface
 * @export
 */
export const QuickConnectApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QuickConnectApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Temporarily activates quick connect for five minutes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async activate(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.activate(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Authorizes a pending quick connect request.
         * @param {string} code Quick connect code to authorize.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authorize(code: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authorize(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Enables or disables quick connect.
         * @param {QuickConnectState} [status] New MediaBrowser.Model.QuickConnect.QuickConnectState.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async available(status?: QuickConnectState, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.available(status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Attempts to retrieve authentication information.
         * @param {string} secret Secret previously returned from the Initiate endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async connect(secret: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuickConnectResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.connect(secret, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Deauthorize all quick connect devices for the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deauthorize(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deauthorize(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the current quick connect state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatus(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuickConnectState>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStatus(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Initiate a new quick connect request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async initiate(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuickConnectResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.initiate(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * QuickConnectApi - factory interface
 * @export
 */
export const QuickConnectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QuickConnectApiFp(configuration)
    return {
        /**
         * 
         * @summary Temporarily activates quick connect for five minutes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        activate(options?: any): AxiosPromise<void> {
            return localVarFp.activate(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Authorizes a pending quick connect request.
         * @param {string} code Quick connect code to authorize.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize(code: string, options?: any): AxiosPromise<boolean> {
            return localVarFp.authorize(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Enables or disables quick connect.
         * @param {QuickConnectState} [status] New MediaBrowser.Model.QuickConnect.QuickConnectState.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        available(status?: QuickConnectState, options?: any): AxiosPromise<void> {
            return localVarFp.available(status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Attempts to retrieve authentication information.
         * @param {string} secret Secret previously returned from the Initiate endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        connect(secret: string, options?: any): AxiosPromise<QuickConnectResult> {
            return localVarFp.connect(secret, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deauthorize all quick connect devices for the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deauthorize(options?: any): AxiosPromise<number> {
            return localVarFp.deauthorize(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the current quick connect state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatus(options?: any): AxiosPromise<QuickConnectState> {
            return localVarFp.getStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Initiate a new quick connect request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiate(options?: any): AxiosPromise<QuickConnectResult> {
            return localVarFp.initiate(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * QuickConnectApi - interface
 * @export
 * @interface QuickConnectApi
 */
export interface QuickConnectApiInterface {
    /**
     * 
     * @summary Temporarily activates quick connect for five minutes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApiInterface
     */
    activate(options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Authorizes a pending quick connect request.
     * @param {string} code Quick connect code to authorize.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApiInterface
     */
    authorize(code: string, options?: any): AxiosPromise<boolean>;

    /**
     * 
     * @summary Enables or disables quick connect.
     * @param {QuickConnectState} [status] New MediaBrowser.Model.QuickConnect.QuickConnectState.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApiInterface
     */
    available(status?: QuickConnectState, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Attempts to retrieve authentication information.
     * @param {string} secret Secret previously returned from the Initiate endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApiInterface
     */
    connect(secret: string, options?: any): AxiosPromise<QuickConnectResult>;

    /**
     * 
     * @summary Deauthorize all quick connect devices for the current user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApiInterface
     */
    deauthorize(options?: any): AxiosPromise<number>;

    /**
     * 
     * @summary Gets the current quick connect state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApiInterface
     */
    getStatus(options?: any): AxiosPromise<QuickConnectState>;

    /**
     * 
     * @summary Initiate a new quick connect request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApiInterface
     */
    initiate(options?: any): AxiosPromise<QuickConnectResult>;

}

/**
 * QuickConnectApi - object-oriented interface
 * @export
 * @class QuickConnectApi
 * @extends {BaseAPI}
 */
export class QuickConnectApi extends BaseAPI implements QuickConnectApiInterface {
    /**
     * 
     * @summary Temporarily activates quick connect for five minutes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public activate(options?: any) {
        return QuickConnectApiFp(this.configuration).activate(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Authorizes a pending quick connect request.
     * @param {string} code Quick connect code to authorize.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public authorize(code: string, options?: any) {
        return QuickConnectApiFp(this.configuration).authorize(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Enables or disables quick connect.
     * @param {QuickConnectState} [status] New MediaBrowser.Model.QuickConnect.QuickConnectState.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public available(status?: QuickConnectState, options?: any) {
        return QuickConnectApiFp(this.configuration).available(status, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Attempts to retrieve authentication information.
     * @param {string} secret Secret previously returned from the Initiate endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public connect(secret: string, options?: any) {
        return QuickConnectApiFp(this.configuration).connect(secret, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deauthorize all quick connect devices for the current user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public deauthorize(options?: any) {
        return QuickConnectApiFp(this.configuration).deauthorize(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the current quick connect state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public getStatus(options?: any) {
        return QuickConnectApiFp(this.configuration).getStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Initiate a new quick connect request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public initiate(options?: any) {
        return QuickConnectApiFp(this.configuration).initiate(options).then((request) => request(this.axios, this.basePath));
    }
}
