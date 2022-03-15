import { fn } from './utils'
fn()
import imgsrc from './1.png'
import './style/base.css'
import './style/less.less'

let img = document.createElement("img")
img.src = imgsrc

document.body.appendChild(img)