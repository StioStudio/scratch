const scriptElm = document.currentScript
const canvasSelector = scriptElm.getAttribute('canvas')

/**@type {HTMLCanvasElement}*/
const canvas = document.querySelector(canvasSelector)
const ctx = canvas.getContext('2d')
const spritesPath = pathFixer(scriptElm.getAttribute('sprites'))
const extensionPath = pathFixer("extensions")
function pathFixer(path) {
    return `${path}/`
}
let spritesJSON = []
const greenFlag = document.querySelector(scriptElm.getAttribute('green-flag'))
const stopAll = document.querySelector(scriptElm.getAttribute('stop-all'))

function __runSprite__(spriteJSON) {
    spriteJSON.code.forEach(async (codePath) => {
        __runSpriteCode__(`./${spritesPath}${spriteJSON.id}/${codePath}`)
    })
}

async function __runSpriteCode__(codePath) {
    // console.log(
    await import(codePath)
    // )
}

// Sprites
__alreadyDownloaded__ = {}
function downloadExtension(extensionName, me = window) {
    return new Promise(async (resolve, reject) => {
        if (__alreadyDownloaded__[extensionName]) {
            resolve(__alreadyDownloaded__[extensionName])
            return
        }
        const extensionJSON = await (await fetch(`${extensionPath}${extensionName}/extension.json`)).json()
        const extensionPaths = extensionJSON.code.map((codePath) => { return `./${extensionPath}${extensionName}/${codePath}` })
        const modules = await Promise.all(extensionPaths.map((v, i) => { return import(v) }))

        const obj = {}
        modules.forEach(module => {
            Object.keys(module).forEach(key => {
                const func = (...e) => { return module[key](me, ...e) }
                window[key] = func
                obj[key] = func
            })
        })
        __alreadyDownloaded__[extensionName] = obj
        resolve(obj)
    })
}

class Sprite {
    constructor(spriteJSON) {
        Object.keys(spriteJSON).forEach((key, i) => {
            this[key] = spriteJSON[key]
        })
        // Events
        downloadExtension("Events", this)

        // Controls
        downloadExtension("Controls", this)

        // Sensing
        downloadExtension("Sensing", this)

        // Operators
        downloadExtension("Operators", this)

        // Variable/list will be in var me
        downloadExtension("Variables", this)

        // Function is unneeded

    }
    addExtension(extension) {
        Object.keys(extension).forEach((key, i) => {
            this[key] = extension[key]
        })
    }
    downloadExtension(extensionName) {
        return downloadExtension(extensionName, this)
    }
}

function getMeById(id) {
    return new Sprite(spritesJSON.find((sprite) => sprite.id == id))
}

function __Costumes__(spriteJSON) {
    spriteJSON.costumes.forEach((costume) => {
        const img = new Image(costume.width, costume.height)
        console.log(spriteJSON)
        img.src = `./${spritesPath}${spriteJSON.id}/${costume.path}`
        img.addEventListener("load", () => {
            ctx.fillRect(100, 100, costume.width, costume.height)
            ctx.drawImage(img, 100, 100, costume.width, costume.height)
        })
    })

}

Promise.all([
    // Events
    downloadExtension("Events"),

    // Controls
    downloadExtension("Controls"),

    // Sensing
    downloadExtension("Sensing"),

    // Operators
    downloadExtension("Operators"),

    // Variable/list will be in var me
    downloadExtension("Variables"),

    // Function is unneeded
]).then(() => {
    whenGreenFlagClicked(() => {
        // Start sprites
        new Promise(async (resolve, reject) => {
            resolve(await (await fetch(`${spritesPath}sprites.json`)).json())
        }).then(async (json) => {
            json.forEach(async (id) => {
                const spriteJSON = await (await fetch(`./${spritesPath}${id}/sprite.json`)).json()
                spriteJSON.id = id
                spritesJSON.push(spriteJSON)
                __runSprite__(spriteJSON)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                await __Costumes__(spriteJSON)
            })
        })
    })
})