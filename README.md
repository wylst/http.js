## http.js

Make AJAX/HTTP requests from client-side JavaScript.

### Introduction

`http.js` provides a super simple, super easy way to make AJAX/HTTP requests. It's basically a few tiny functions to simplify XMLHttpRequest calls.

### Usage

`http.js` currently all HTTP methods. GET and POST requests are supported in short-hand form.

Pass in your options to the `request` function (all are optional; defaults are shown):
```javascript
var options = {
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
}
```

Or use the shorthand functions `get` and `post`, which can take in a similar options object but without the need for a method.

#### Example usage

We can try a simple GET request:
```javascript
http.get({
    url: '/api/users',
    onload: function() { console.log(JSON.parse(this.responseText)) }
});
```

Or a POST request:
```javascript
var data = { name: 'http.js' }
http.post({
    url: '/api/things',
    data: JSON.stringify(data),
    contentType: 'application/json',
    onload: function() { console.log(JSON.parse(this.responseText)) }
});
```

Even a random DELETE:
```javascript
http.request({
    method: 'DELETE',
    url: '/api/users/2',
    onload: function() { console.log(JSON.parse(this.status)) }
});
```

A request with a custom timeout:
```javascript
http.get({
    url: '/api/poll',
    contentType: 'application/json',
    onload: function() { console.log(JSON.parse(this.responseText)) }
    timeout: 3,
    props: ['timeout']
});
```
