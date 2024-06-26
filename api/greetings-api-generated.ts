/* tslint:disable */
/* eslint-disable */
/*
Test Automation (No submodules)

SDKs (no submodules) to test automation workflows.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HelloResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * GreetingsApi - axios parameter creator
 * @export
 */
export const GreetingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a simple greeting!!!
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        hello: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hello`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/hello',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GreetingsApi - functional programming interface
 * @export
 */
export const GreetingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GreetingsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a simple greeting!!!
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async hello(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HelloResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hello(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GreetingsApi - factory interface
 * @export
 */
export const GreetingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GreetingsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a simple greeting!!!
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        hello(options?: AxiosRequestConfig): AxiosPromise<HelloResponse> {
            return localVarFp.hello(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GreetingsApiGenerated - object-oriented interface
 * @export
 * @class GreetingsApiGenerated
 * @extends {BaseAPI}
 */
export class GreetingsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get a simple greeting!!!
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GreetingsApiGenerated
     */
    public hello(options?: AxiosRequestConfig) {
        return GreetingsApiFp(this.configuration).hello(options).then((request) => request(this.axios, this.basePath));
    }
}
