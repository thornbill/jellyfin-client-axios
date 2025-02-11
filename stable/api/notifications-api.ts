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
import { AdminNotificationDto } from '../models';
// @ts-ignore
import { NameIdPair } from '../models';
// @ts-ignore
import { NotificationResultDto } from '../models';
// @ts-ignore
import { NotificationTypeInfo } from '../models';
// @ts-ignore
import { NotificationsSummaryDto } from '../models';
// @ts-ignore
import { UNKNOWN_BASE_TYPE } from '../models';
/**
 * NotificationsApi - axios parameter creator
 * @export
 */
export const NotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Sends a notification to all admins.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The notification request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdminNotification: async (uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'uNKNOWNBASETYPE' is not null or undefined
            assertParamExists('createAdminNotification', 'uNKNOWNBASETYPE', uNKNOWNBASETYPE)
            const localVarPath = `/Notifications/Admin`;
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
         * @summary Gets notification services.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationServices: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Notifications/Services`;
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
         * @summary Gets notification types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationTypes: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Notifications/Types`;
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
         * @summary Gets a user\'s notifications.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifications: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getNotifications', 'userId', userId)
            const localVarPath = `/Notifications/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * @summary Gets a user\'s notification summary.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationsSummary: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getNotificationsSummary', 'userId', userId)
            const localVarPath = `/Notifications/{userId}/Summary`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * @summary Sets notifications as read.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRead: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('setRead', 'userId', userId)
            const localVarPath = `/Notifications/{userId}/Read`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * @summary Sets notifications as unread.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setUnread: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('setUnread', 'userId', userId)
            const localVarPath = `/Notifications/{userId}/Unread`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
    }
};

/**
 * NotificationsApi - functional programming interface
 * @export
 */
export const NotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Sends a notification to all admins.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The notification request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAdminNotification(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAdminNotification(uNKNOWNBASETYPE, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets notification services.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotificationServices(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NameIdPair>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotificationServices(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets notification types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotificationTypes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NotificationTypeInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotificationTypes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a user\'s notifications.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotifications(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationResultDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotifications(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a user\'s notification summary.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotificationsSummary(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationsSummaryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotificationsSummary(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets notifications as read.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setRead(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRead(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets notifications as unread.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setUnread(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setUnread(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NotificationsApi - factory interface
 * @export
 */
export const NotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Sends a notification to all admins.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The notification request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdminNotification(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void> {
            return localVarFp.createAdminNotification(uNKNOWNBASETYPE, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets notification services.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationServices(options?: any): AxiosPromise<Array<NameIdPair>> {
            return localVarFp.getNotificationServices(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets notification types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationTypes(options?: any): AxiosPromise<Array<NotificationTypeInfo>> {
            return localVarFp.getNotificationTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a user\'s notifications.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifications(userId: string, options?: any): AxiosPromise<NotificationResultDto> {
            return localVarFp.getNotifications(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a user\'s notification summary.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationsSummary(userId: string, options?: any): AxiosPromise<NotificationsSummaryDto> {
            return localVarFp.getNotificationsSummary(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets notifications as read.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRead(userId: string, options?: any): AxiosPromise<void> {
            return localVarFp.setRead(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets notifications as unread.
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setUnread(userId: string, options?: any): AxiosPromise<void> {
            return localVarFp.setUnread(userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NotificationsApi - interface
 * @export
 * @interface NotificationsApi
 */
export interface NotificationsApiInterface {
    /**
     * 
     * @summary Sends a notification to all admins.
     * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The notification request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     */
    createAdminNotification(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Gets notification services.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     */
    getNotificationServices(options?: any): AxiosPromise<Array<NameIdPair>>;

    /**
     * 
     * @summary Gets notification types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     */
    getNotificationTypes(options?: any): AxiosPromise<Array<NotificationTypeInfo>>;

    /**
     * 
     * @summary Gets a user\'s notifications.
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     */
    getNotifications(userId: string, options?: any): AxiosPromise<NotificationResultDto>;

    /**
     * 
     * @summary Gets a user\'s notification summary.
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     */
    getNotificationsSummary(userId: string, options?: any): AxiosPromise<NotificationsSummaryDto>;

    /**
     * 
     * @summary Sets notifications as read.
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     */
    setRead(userId: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Sets notifications as unread.
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     */
    setUnread(userId: string, options?: any): AxiosPromise<void>;

}

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export class NotificationsApi extends BaseAPI implements NotificationsApiInterface {
    /**
     * 
     * @summary Sends a notification to all admins.
     * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The notification request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public createAdminNotification(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any) {
        return NotificationsApiFp(this.configuration).createAdminNotification(uNKNOWNBASETYPE, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets notification services.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotificationServices(options?: any) {
        return NotificationsApiFp(this.configuration).getNotificationServices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets notification types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotificationTypes(options?: any) {
        return NotificationsApiFp(this.configuration).getNotificationTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a user\'s notifications.
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotifications(userId: string, options?: any) {
        return NotificationsApiFp(this.configuration).getNotifications(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a user\'s notification summary.
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotificationsSummary(userId: string, options?: any) {
        return NotificationsApiFp(this.configuration).getNotificationsSummary(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets notifications as read.
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public setRead(userId: string, options?: any) {
        return NotificationsApiFp(this.configuration).setRead(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets notifications as unread.
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public setUnread(userId: string, options?: any) {
        return NotificationsApiFp(this.configuration).setUnread(userId, options).then((request) => request(this.axios, this.basePath));
    }
}
