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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserLoginRequest
 */
export interface UserLoginRequest {
    /**
     * 
     * @type {string}
     * @memberof UserLoginRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserLoginRequest
     */
    password?: string | null;
}

export function UserLoginRequestFromJSON(json: any): UserLoginRequest {
    return UserLoginRequestFromJSONTyped(json, false);
}

export function UserLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLoginRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function UserLoginRequestToJSON(value?: UserLoginRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}

