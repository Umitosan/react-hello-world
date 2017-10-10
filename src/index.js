
function liveTime() {

  // React.createElement('element type',{properties},'child elements')
  var greeting = React.createElement('h1', {}, 'Hello, World!');
  var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
  // the element 'app' below contains greeting and clock as children
  var app = React.createElement('div', {}, greeting, clock);


  // React.createElement() calls Document.createElement() for each argument provided to it.
  ReactDOM.render(
    app,
    document.getElementById('react-app-root')
  );

}


// Notice if you inspect the DOM that the <h1>Hello World!</h1> doesn't change on the timer
//  Despite explicitly instructing it to redefine multiple DOM elements,
//   React is smart enough to only update elements that actually change!
setInterval(liveTime, 1000);
