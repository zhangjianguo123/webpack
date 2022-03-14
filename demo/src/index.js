import { fn } from './utils'
fn()
import imgsrc from './1.png'

let img = document.createElement("img")
img.src = imgsrc

document.body.appendChild(img)