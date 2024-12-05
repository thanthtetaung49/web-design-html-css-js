const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})


interact(".dropzone")
  .dropzone({
    ondrop: function (event) {
      
      event.relatedTarget.textContent = "Item has been dropped in dragzone"
      event.target.style.backgroundColor = "red";
    },
    ondragleave: function (event) {
      event.relatedTarget.innerText = 'Draggable Element is outside the drop zone'
      event.target.style.backgroundColor = "rgb(34, 238, 58)";
    }
  })
  .on('dropactivate', function (event) {
    event.target.classList.add('drop-activated')
  })