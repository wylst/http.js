var http = {
    DEFAULTS: {
        async: true,
        contentType: "text/plain",
        data: null,
        headers: {},
        method: "GET",
        onload: function() {},
        url: "./",
    },
    request: function(options) {
        // Get options and initialize request with URL
        var options = this.options(options);
        var req = new XMLHttpRequest();
        req.onload = options.onload;
        req.open(options.method, options.url, options.async);

        // Request headers
        for (var key in options.headers) {
            if (options.headers.hasOwnProperty(key))
                req.setRequestHeader(key, options.headers[key]);
        }
        req.setRequestHeader('Content-Type', options.contentType);

        // Send request and return
        req.send(options.data);
        return req;
    },
    options: function(options) {
        var merged = {}, defaults = this.DEFAULTS;
        for (var key in defaults) {
            if (defaults.hasOwnProperty(key))
                merged[key] = options[key] || defaults[key];
        }
        return merged;
    },
    get: function(options) {
        return this.request(options);
    },
    post: function(options) {
        options.method = "POST";
        return this.request(options);
    }
}
