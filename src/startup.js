
(function () {

  // function getParam(n) {
  //   var half = location.search.split(n + '=')[1];
  //   return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null;
  // }

  // const coin = getParam('coin') || 'city';
  // console.log('Selected coin: ' + coin);

  // We don't really want to change the whole branding, Blockcore Hub will support multiple coins. But if anyone
  // want to fork and release a more generic app with multi-coin support, they could change top-logo this way.
  // document.getElementById('title-bar-logo').setAttribute('src', '/assets/' + coin + '/logo-full-dark.png');

  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('electron') > -1) {
    document.body.classList.add('app-electron');
  }


  function init() {
    
  };

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      init();
    }
  };
  
})();
