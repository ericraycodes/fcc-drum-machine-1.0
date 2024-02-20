# Developing the app
### 1. Reactive drum pad embedded sound on user-event
The app used the HTMLMediaElement API and event listeners.
> The idea is to get a single drum pad component completely working first before reproducing a complete drum kit. This includes the functionality of a mouse click event and keyboard events.

The keyboard user-events are done with event delegation.
The mouse event is attached on every `<button/>`. My attempt on event delegation on this had the drum pads not responsive - not good UX for me. The little to more code and performance overhead cannot be helped.
- Event delegation: freeCodeCamp [article](https://www.freecodecamp.org/news/event-delegation-javascript/)
- Best places to attach event listeners: [stackoverflow](https://stackoverflow.com/questions/26104525/best-practices-for-where-to-add-event-listeners)
- Events:
  - [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event),
  - [mousedown](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event).
- Remove event listeners: [reference](https://medium.com/@vk784_10031/how-to-remove-event-listeners-in-javascript-having-anonymous-functions-4ad47cf3befd)

The HTML5 `<audio/>` is used for project specification. However, an article below for future reference:
- Web Audio API over HTML5 `<audio/>`:
  - [stackoverflow](https://stackoverflow.com/questions/20657252/delays-when-seeking-with-html5-audio-currenttime)
  -[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

### 2. JSON: Central drum pads data
The *drum-pads.json* file is fetched to *React*. This is used to store central app-drum-kit data.
The data is then passed onto the iteratively rendered component.
*How to manually create a JSON file?* See [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

### 3. Display functionality




# HTMLMediaElement API
  This is used to manipulate the `<audio />` element's playback.
  The `currentTime` property and `play()` method is used for a reactive sound response on click.
  The `loadstart` is used for 


# addEventListener or inline onClick?
  - [stackoverflow 1](https://stackoverflow.com/questions/26008243/is-it-more-efficient-to-use-addeventlistener-or-onclick-for-performance)
  - [stackoverflow 2](https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick)
