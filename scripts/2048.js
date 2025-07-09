class Tile {
  constructor(value = 0) {
    this.value = value

    this.element = document.createElement('div')
    this.element.classList.add('tile')

    if (value === 0) {
      this.element.classList.add('tile-empty')
    } else {
      this.element.classList.add(`tile-val-${value}`)
      this.text = document.createElement('p')
      this.element.appendChild(this.text)
      this.text.classList.add(`tile-textW-${value.toString().length}`)
    }
  }

  setPosition(x, y) {
    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
  }
}


// class Tile {
//   constructor(value, backgroundColor, textColor) {
//     this.value = value
//     this.backgroundColor = backgroundColor
//     this.textColor = textColor

//     this.tile = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
//     this.tile.style = `fill: ${backgroundColor};`
//   }

//   setPos(x, y) {
//     this.tile.x = x
//     this.tile.y = y
//   }

//   setSize(width, height) {
//     this.tile.width = width
//     this.tile.height = height
//   }

//   setRadius(rx, ry) {
//     this.tile.rx = rx
//     this.tile.ry = ry
//   }
// }

// const colors = {
//   background: {
//     empty: '#C9C0B3',
//     tile2: '#ECE8DC',
//     tile4: '#EBDFC7',
//     tile8: '#F3B177',
//     tile16: '#F59467',
//     tile32: '#F57C5F',
//     tile64: '#F85D3E',
//     tile128: '#EBCE72',
//     tile256: '#EECC60',
//     tile512: '#ECC850',
//     tile1024: '#ECC441',
//     tile2048: '#EDC12D'
//   },
//   foreground: {
//     tile2: '#7B7263',
//     tile4: '#7B7263',
//     tile8: '#F9EDDD',
//     tile16: '#F9EDDD',
//     tile32: '#F9EDDD',
//     tile64: '#F9EDDD',
//     tile128: '#F9EDDD',
//     tile256: '#F9EDDD',
//     tile512: '#F9EDDD',
//     tile1024: '#F9EDDD',
//     tile2048: '#F9EDDD',
//   }
// }

// function randColor() {
//   return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
// }

// window.onload = () => {
//   const canvas = document.getElementById('main')

//   let tileWidth = 0
//   let tileGap = 0

//   function updateSize() {
//     const width = document.body.clientWidth
//     const height = document.body.clientHeight
//     const size = Math.min(width, height) * 0.8
//     canvas.width = size
//     canvas.height = size

//     tileWidth = 0.2 * size
//     tileGap = 0.04 * size
//   }

//   window.onresize = () => updateSize()

//   updateSize()

//   const ctx = canvas.getContext('2d')
//   ctx.textAlign = 'center'
//   ctx.textBaseline = 'middle'
//   ctx.font = '80px consolas'

//   const grid = [
//     0, 2, 1024, 0,
//     8, 2048, 512, 128,
//     64, 0, 4, 256,
//     0, 16, 32, 0
//   ]

//   function bg() {
//     ctx.fillStyle = '#BDB0A2'
//     ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
//   }

//   function drawTile(x, y, s) {
//     const r = 0.05 * s
//     ctx.beginPath()
//     ctx.moveTo(x, y + r)
//     ctx.arcTo(x, y, x + r, y, r)
//     ctx.lineTo(x + s - r, y)
//     ctx.arcTo(x + s, y, x + s, y + r, r)
//     ctx.lineTo(x + s, y + s - r)
//     ctx.arcTo(x + s, y + s, x + s - r, y + s, r)
//     ctx.lineTo(x + r, y + s)
//     ctx.arcTo(x, y + s, x, y + s - r, r)
//     ctx.closePath()
//     ctx.fill()
//   }

//   function drawTileText(x, y, t) {
//     ctx.fillText(t, x, y)
//   }

//   function drawGrid() {
//     const rect = canvas.getBoundingClientRect()
//     const width = rect.width

//     const alpha = 0.22
//     const size = width * alpha
//     const gap = width * (1 - alpha * 4) / 5

//     for (let i = 0; i < 4; i++) {
//       for (let j = 0; j < 4; j++) {
//         const ox = (j + 1) * gap + j * size
//         const oy = (i + 1) * gap + i * size

//         const value = grid[i * 4 + j]
//         if (value === 0) {
//           ctx.fillStyle = colors.background.empty
//         } else {
//           ctx.fillStyle = colors.background['tile' + value]
//         }

//         // const color = randColor()
//         // ctx.fillStyle = color
//         drawTile(ox, oy, size)

//         if (value !== 0) {
//           ctx.fillStyle = colors.foreground['tile' + value]
//           drawTileText(ox + size / 2, oy + size / 2, value.toString())
//         }
//       }
//     }
//   }

//   bg()
//   drawGrid()
// }