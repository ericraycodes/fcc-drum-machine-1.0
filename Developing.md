# Developing the app
#### Reactive drum pad embedded sound on user-event
The app used the HTMLMediaElement API and event listeners.
#### Central drum pads data
The *drum-pads.json* file is fetched to *React*.


The data is then passed onto the iteratively rendered component.


# JSON
#### Drum machine data on JSON file
 - This is used to center information and for reactive render.
#### How to create a JSON file manually.
 [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) reference.

# HTMLMediaElement API
  This is used to manipulate the `<audio />` element's playback controls.
  The `currentTime` property and `play()` method is used for a reactive sound response on click.

# addEventListener or inline onClick?
  [stackoverflow 1](https://stackoverflow.com/questions/26008243/is-it-more-efficient-to-use-addeventlistener-or-onclick-for-performance)
  [stackoverflow 2](https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick)
