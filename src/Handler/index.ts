const _ = require('lodash');
/**
 * Decorator for API functions which are called via an HTTP request.
 *
 * @param {Function} apiMethod API method to call
 * @return {Function} middleware format function to be called by the route
 * when a matching request is made
 */
const http = function http(apiMethod, auth) {
    return function apiHandler(req, res, next) {
        const {body, file, query, params, context, user} = req;
        // We define 2 properties for using as arguments in API calls:

        //console.log(req)
        const options = _.extend({}, {file}, {query}, {params}, {context});

        // If this is a GET, or a DELETE, req.body should be null,
        //so we only have options (route and query params)
        // If this is a PUT, POST, or PATCH, req.body is an object
        // if (_.isEmpty(object)) {
        //     object = options;
        //     options = {};

        console.log('apiMethod::::::::::::::;', apiMethod)
        // }
        return apiMethod({body, options, user}).then(function then(response) {
            // CASE: api method response wants to handle the express response
            // example: serve files (stream)
            if (typeof response === 'function') {
                return response(req, res, next);
            }

            // const {message, details} = response;
            // res.status(response.code || 200).json({message: message, details: details || {}});

            // Send a properly formatting HTTP response containing the data with correct headers
            res.status(response.code || 200).json(response || {});
        }).catch(function onAPIError(error) {
            // To be handled by the API middleware
            next(error);
        });
    };
};

module.exports = {
    http
};
