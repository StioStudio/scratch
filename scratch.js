const scriptElm = document.currentScript
const canvasSelector = scriptElm.getAttribute('canvas')
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

new Promise(async (resolve, reject) => {
    resolve(await (await fetch(`${spritesPath}sprites.json`)).json())
}).then(async (json) => {
    json.forEach(async (id) => {
        const spriteJSON = await (await fetch(`./${spritesPath}${id}/sprite.json`)).json()
        spriteJSON.id = id
        __runSprite__(spriteJSON)
    })
})

function __runSprite__(spriteJSON) {
    spritesJSON.push(spriteJSON)
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
__alreadyDownloaded__ = []
async function downloadExtension(extensionName) {
    if (__alreadyDownloaded__.includes(extensionName)) return
    const extensionJSON = await (await fetch(`${extensionPath}${extensionName}/extension.json`)).json()
    extensionJSON.code.forEach(async (codePath) => {
        const module = await import(`./${extensionPath}${extensionName}/${codePath}`)
        Object.keys(module).forEach(key => {
            window[key] = module[key]
        })
    })
    __alreadyDownloaded__.push(extensionName)
}

function getMeById(id) {
    return spritesJSON.find((sprite) => sprite.id == id)
}

// Events
downloadExtension("Events")

// Controls
downloadExtension("Controls")

// Sensing
downloadExtension("Sensing")

// Operators
downloadExtension("Operators")

// Variable/list will be in var me

// Function is unneeded