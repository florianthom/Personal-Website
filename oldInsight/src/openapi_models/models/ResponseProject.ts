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
import { Project, ProjectFromJSON, ProjectFromJSONTyped, ProjectToJSON } from "./";

/**
 *
 * @export
 * @interface ResponseProject
 */
export interface ResponseProject {
    /**
     *
     * @type {Project}
     * @memberof ResponseProject
     */
    data?: Project;
}

export function ResponseProjectFromJSON(json: any): ResponseProject {
    return ResponseProjectFromJSONTyped(json, false);
}

export function ResponseProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseProject {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !exists(json, "data") ? undefined : ProjectFromJSON(json["data"]),
    };
}

export function ResponseProjectToJSON(value?: ResponseProject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: ProjectToJSON(value.data),
    };
}
