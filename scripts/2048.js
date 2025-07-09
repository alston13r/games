const colors = {
  background: {
    empty: '#C9C0B3',
    tile2: '#ECE8DC',
    tile4: '#EBDFC7',
    tile8: '#F3B177',
    tile16: '#F59467',
    tile32: '#F57C5F',
    tile64: '#F85D3E',
    tile128: '#EBCE72',
    tile256: '#EECC60',
    tile512: '#ECC850',
    tile1024: '#ECC441',
    tile2048: '#EDC12D'
  },
  foreground: {
    tile2: '#7B7263',
    tile4: '#7B7263',
    tile8: '#F9EDDD',
    tile16: '#F9EDDD',
    tile32: '#F9EDDD',
    tile64: '#F9EDDD',
    tile128: '#F9EDDD',
    tile256: '#F9EDDD',
    tile512: '#F9EDDD',
    tile1024: '#F9EDDD',
    tile2048: '#F9EDDD',
  }
}

function randColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

window.onload = () => {
  const canvas = document.getElementById('main')

  let tileWidth = 0
  let tileGap = 0

  function updateSize() {
    const width = document.body.clientWidth
    const height = document.body.clientHeight
    const size = Math.min(width, height) * 0.8
    canvas.width = size
    canvas.height = size

    tileWidth = 0.2 * size
    tileGap = 0.04 * size
  }

  window.onresize = () => updateSize()

  updateSize()

  const ctx = canvas.getContext('2d')

  const grid = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
  ]

  function bg() {
    ctx.fillStyle = '#BDB0A2'
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
  }

  function drawTile(x, y, w, h) {

  }

  function drawGrid() {
    const rect = canvas.getBoundingClientRect()
    const width = rect.width

    const size = width * 0.2
    const gap = width * 0.04

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const color = randColor()
        ctx.fillStyle = color
        ctx.fillRect((j + 1) * gap + j * size, (i + 1) * gap + i * size, size, size)
      }
    }
  }

  bg()
  drawGrid()
}