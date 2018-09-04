var getHttpRequest = function () {
  var httpRequest = false;
  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
    if (httpRequest.overrideMimeType) {
      httpRequest.overrideMimeType('text/xml');
    }
  }
  if (!httpRequest) {
    alert('Abandon :( Impossible de créer une instance XMLHTTP');
    return false;
  }
  return httpRequest
}
var xhr = getHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var results = JSON.parse(xhr.responseText);
    var langs = Object.keys(results.list);
    var count = langs.length;
    var index = function (keytoFind) {
      return langs.indexOf(keytoFind)
    }
    var lan_list = document.getElementById('lan_list');
    for (var key in results.list) {
      var code = results.list[key];
      var itemType = typeof(code);
      if (itemType == 'string') {
        var item = document.createElement('li');
        item.innerHTML = langs[index(key)] + ' : ' + code;
        lan_list.appendChild(item); 
      } else if (itemType == 'object') {
        var item = document.createElement('li');
        item.innerHTML = langs[index(key)] + ' : ';
        var innerList = document.createElement('ul') ;
        for (var el in code) {
          var subItem = document.createElement('li');
          subItem.innerHTML = el + ' : ' + code[el];
          innerList.appendChild(subItem);
        }
        item.appendChild(innerList);
        lan_list.appendChild(item);
      }
    }
  }
}
xhr.open('GET', 'http://localhost:8080/config/config.json', true);
xhr.send();