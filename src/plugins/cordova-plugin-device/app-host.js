// Copyright (c) Microsoft Corporation. All rights reserved.

module.exports = function(messages) {
    function getCordovaVersion() {
        return (window.cordova) ? window.cordova.version : null;
    }

    messages.register('cordovaVersion', function (callback) {
        callback(null, getCordovaVersion());
    });

    messages.emit('cordova-version', getCordovaVersion());
};
