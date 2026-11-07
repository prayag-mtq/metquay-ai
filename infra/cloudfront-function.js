// CloudFront Functions (cloudfront-js-2.0), viewer-request event.
var CANONICAL_HOST = "www.metquay.com";

function redirect(location) {
  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: { location: { value: location }, "cache-control": { value: "max-age=86400" } },
  };
}

function queryString(querystring) {
  var parts = [];
  for (var key in querystring) {
    var entry = querystring[key];
    var values = entry.multiValue ? entry.multiValue : [entry];
    for (var i = 0; i < values.length; i++) {
      parts.push(values[i].value ? key + "=" + values[i].value : key);
    }
  }
  return parts.length ? "?" + parts.join("&") : "";
}

function segmentPrefetchPath(uri) {
  var slash = uri.lastIndexOf("/");
  var name = uri.slice(slash + 1);
  if (name.indexOf("__next.") !== 0 || name.slice(-4) !== ".txt") return null;
  var parts = name.slice(0, -4).split(".");
  if (parts.length < 3) return null;
  return uri.slice(0, slash + 1) + "__next." + parts.slice(1).join("/") + ".txt";
}

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var host = request.headers.host ? request.headers.host.value : CANONICAL_HOST;
  var query = queryString(request.querystring);

  if (host === "metquay.com") {
    return redirect("https://" + CANONICAL_HOST + uri + query);
  }
  if (uri === "/hi" || uri.indexOf("/hi/") === 0) {
    return redirect((uri.slice(3) || "/") + query);
  }
  if (uri.indexOf("/post/") === 0) {
    return redirect("/blog/" + uri.slice(6) + query);
  }
  if (uri.length > 1 && uri.charAt(uri.length - 1) === "/") {
    return redirect(uri.replace(/\/+$/, "") + query);
  }
  var prefetch = segmentPrefetchPath(uri);
  if (prefetch) {
    request.uri = prefetch;
  } else if (uri === "/") {
    request.uri = "/index.html";
  } else if (uri.lastIndexOf(".") <= uri.lastIndexOf("/")) {
    request.uri = uri + ".html";
  }
  return request;
}

if (typeof module !== "undefined") module.exports = { handler: handler };
