var http = {
    DEFAULTS: {
        async: true,
        contentType: 'text/plain',
        data: null,
        headers: {},
        method: 'GET',
        onerror: function() {},
        onload: function() {},
        onreadystatechange: function() {},
        url: './',
        props: []
    },
    DEFAULT_PROPS: [
        'onload',
        'onerror',
        'onreadystatechange'
    ],
    request: function(options) {
        // Get options and initialize request with URL
        var options = this.options(options);
        var req = new XMLHttpRequest();

        // Copy properties
        for (var i = 0; i < options.props.length; i++) {
            var key = options.props[i];
            req[key] = options[key];
        }

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
        var keys = Object.keys(options).concat(Object.keys(defaults));
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            merged[key] = options[key] || defaults[key];
        }
        merged.props = merged.props.concat(this.DEFAULT_PROPS);
        return merged;
    },
    get: function(options) {
        return this.request(options);
    },
    post: function(options) {
        options.method = 'POST';
        return this.request(options);
    }
}
