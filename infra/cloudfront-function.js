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

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var host = request.headers.host ? request.headers.host.value : CANONICAL_HOST;

  if (host === "metquay.com") {
    return redirect("https://" + CANONICAL_HOST + uri + queryString(request.querystring));
  }
  if (uri === "/hi" || uri.indexOf("/hi/") === 0) {
    return redirect(uri.slice(3) || "/");
  }
  if (uri.indexOf("/post/") === 0) {
    return redirect("/blog/" + uri.slice(6));
  }
  if (uri.length > 1 && uri.charAt(uri.length - 1) === "/") {
    return redirect(uri.replace(/\/+$/, ""));
  }
  if (uri === "/") {
    request.uri = "/index.html";
  } else if (uri.lastIndexOf(".") <= uri.lastIndexOf("/")) {
    request.uri = uri + ".html";
  }
  return request;
}

if (typeof module !== "undefined") module.exports = { handler: handler };
