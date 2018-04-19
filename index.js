AFRAME.registerComponent('rotation-listener', {
  tick() {
    const newValue = this.el.getAttribute('rotation');
    const stringCoords = AFRAME.utils.coordinates.stringify(newValue);
    if (this.lastValue !== stringCoords) {
      this.el.emit('rotationChanged', newValue);
      this.lastValue = stringCoords;
    }
  },
});

AFRAME.registerComponent('position-listener', {
  tick() {
    const newValue = this.el.getAttribute('position');
    const stringCoords = AFRAME.utils.coordinates.stringify(newValue);
    if (this.lastValue !== stringCoords) {
      this.el.emit('positionChanged', newValue);
      this.lastValue = stringCoords;
    }
  },
});
