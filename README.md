# aframe-camera-events

A-Frame helper that emit events whenever the camera position / orientation changes.

Listens to changes in your camera's orientation and position and emits `rotationChanged` / `positionChanged` events respectively.

## Installation

Add the following line to your html file, just after loading A-Frame:

    <script src="https://rawgit.com/urish/aframe-camera-events/master/index.js"></script>

You can also get this component through npm:

    npm install --save aframe-camera-events

## Usage

Add the `position-listener` and / or `rotation-listener` components to your `a-camera`:

```html
<a-camera id="my-camera" position-listener rotation-listener>
</a-camera>
```

You can then attach event listeners to your camera, e.g.:

```javascript
document.getElementById('my-camera')
  .addEventListener('rotationChanged', e => {
    console.log('New rotation:', e.detail);
  });
```

## License

MIT.
