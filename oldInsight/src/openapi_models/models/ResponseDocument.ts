/* tslint:disable */
/* eslint-disable */
/**
 * PersonalWebsiteBackend
 * PersonalWebsiteBackend API Swagger Surface
 *
 * The version of the OpenAPI document: v1
 * Contact: thom.florian@yahoo.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import { Document, DocumentFromJSON, DocumentFromJSONTyped, DocumentToJSON } from "./";

/**
 *
 * @export
 * @interface ResponseDocument
 */
export interface ResponseDocument {
    /**
     *
     * @type {Document}
     * @memberof ResponseDocument
     */
    data?: Document;
}

export function ResponseDocumentFromJSON(json: any): ResponseDocument {
    return ResponseDocumentFromJSONTyped(json, false);
}

export function ResponseDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseDocument {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !exists(json, "data") ? undefined : DocumentFromJSON(json["data"]),
    };
}

export function ResponseDocumentToJSON(value?: ResponseDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: DocumentToJSON(value.data),
    };
}
