(function(d) {
  var o = window.smartlook = function() {
    o.api.push(arguments);
  };
  var h = d.getElementsByTagName('head')[0];
  var c = d.createElement('script');
  o.api = [];
  c.async = true;
  c.type = 'text/javascript';
  c.charset = 'utf-8';
  c.src = 'https://web-sdk.smartlook.com/recorder.js';
  h.appendChild(c);
})(document);

smartlook('init', 'eafab5dd1bf0a73ad262bbb9b04a02eab3f3c15a', { region: 'eu' });
