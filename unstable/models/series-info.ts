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



/**
 * 
 * @export
 * @interface SeriesInfo
 */
export interface SeriesInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof SeriesInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof SeriesInfo
     */
    Path?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof SeriesInfo
     */
    MetadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof SeriesInfo
     */
    MetadataCountryCode?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof SeriesInfo
     */
    ProviderIds?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof SeriesInfo
     */
    Year?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SeriesInfo
     */
    IndexNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SeriesInfo
     */
    ParentIndexNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SeriesInfo
     */
    PremiereDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesInfo
     */
    IsAutomated?: boolean;
}


