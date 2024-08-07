declare function downloadExtension(extensionName: string): Promise<Extension>{
    return new Promise(async (resolve, reject) => {
        if (__alreadyDownloaded__.includes(extensionName)) return
        const extensionJSON = await (await fetch(`${extensionPath}${extensionName}/extension.json`)).json()
        const extensionPaths = extensionJSON.code.map((codePath)=>{return `./${extensionPath}${extensionName}/${codePath}`})
        const modules = await Promise.all(extensionPaths.map((v, i)=>{return import(v)}))

        const obj = {}
        modules.forEach(module => {
            Object.keys(module).forEach(key => {
                window[key] = module[key]
                obj[key] = module[key]
            })
        })
        __alreadyDownloaded__.push(extensionName)
        resolve(obj)
    })
}

declare function getMeById(id: string): Sprite{
    return spritesJSON.find((sprite) => sprite.id == id)
}