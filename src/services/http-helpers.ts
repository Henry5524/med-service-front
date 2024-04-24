
import { AxiosResponse } from 'axios';
import _ from 'lodash';

/**
 * Execute the request as a Promise, resolving with the data from the response.  In case of errors, reject the
 * promise with an error message.
 * *
 * @param req Axios Response Promise (returned by get, post, put etc)
 * @param process optional function to process the response.data before return
 * @return Returns the Promise that will resolve with the response data, or will reject with an error
 *          message in case of errors
 */
export function handleRequest<T>(req: Promise<AxiosResponse<T>>, process?: (data: any) => T): Promise<T> {
    // log('[http-helpers] handleRequest, req:', JSON.stringify(req));
    return new Promise((resolve, reject) => {
        req
            .then(response => {
                // log('[http-helpers] handleRequest.OK, response:', JSON.stringify(response));
                resolve(process ? process(response.data) : response.data);
            })
            .catch(error => {
                reject(handleError(error));
            });
    });
}

/**
 * Execute the request as a Promise, resolving with the entire response object.  This was added for a request where
 * the request headers needed to be made available.  In case of errors, reject the promise with an error message.
 *
 * @param req Axios Response Promise (returned by get, post, put etc)
 * @return Returns the Promise that will resolve with the full response object, or will reject with an error
 *          message in case of errors.
 */
export function handleRequestReturnResponse<T>(req: Promise<AxiosResponse<T>>): Promise<AxiosResponse> {
    // log('[http-helpers] handleRequestReturnEntireResponse, req:', JSON.stringify(req));
    return new Promise((resolve, reject) => {
        req
            .then(response => {
                // log('[http-helpers] handleRequestReturnEntireResponse.OK, response:', JSON.stringify(response));
                resolve(response);
            })
            .catch(error => {
                reject(handleError(error));
            });
    });
}

const handleError = (error: any): any => {
    const err: any = {};
    if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        err.status = error.response.status;
        err.message = error.response.statusText;
        if (!_.isEmpty(error.response.data.error)) {
            if (_.isString(error.response.data.error)) {
                err.message = error.response.data.error;
            } else if (_.isEmpty(error.response.data.error.error_text)) {
                err.message = 'Unknown error!';
            } else {
                err.message = error.response.data.error.error_text;
            }
        } else if (!_.isEmpty(error.response.data.message)) {
            err.message = error.response.data.message;
        }
        else {
            err.message = 'Unknown error.';
        }
    } else if (error.request) {
        // The request was made but no response was received
        err.message = 'Network error.';
        err.status = -1;
    } else {
        // Something happened in setting up the request that triggered an Error
        err.message = error.message;
        err.status = -2;
    }
    return err;
};
