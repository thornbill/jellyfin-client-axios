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


import { ImageOption } from './image-option';
import { ImageType } from './image-type';
import { LibraryOptionInfoDto } from './library-option-info-dto';

/**
 * Library type options dto.
 * @export
 * @interface LibraryTypeOptionsDto
 */
export interface LibraryTypeOptionsDto {
    /**
     * Gets or sets the type.
     * @type {string}
     * @memberof LibraryTypeOptionsDto
     */
    Type?: string | null;
    /**
     * Gets or sets the metadata fetchers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryTypeOptionsDto
     */
    MetadataFetchers?: Array<LibraryOptionInfoDto> | null;
    /**
     * Gets or sets the image fetchers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryTypeOptionsDto
     */
    ImageFetchers?: Array<LibraryOptionInfoDto> | null;
    /**
     * Gets or sets the supported image types.
     * @type {Array<ImageType>}
     * @memberof LibraryTypeOptionsDto
     */
    SupportedImageTypes?: Array<ImageType> | null;
    /**
     * Gets or sets the default image options.
     * @type {Array<ImageOption>}
     * @memberof LibraryTypeOptionsDto
     */
    DefaultImageOptions?: Array<ImageOption> | null;
}


