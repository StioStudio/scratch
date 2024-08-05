declare function whenGreenFlagClicked(callback: () => void): void

declare function whenKeyPressed(key: string, callback: () => void): void

declare function whenIReceiveMessage(message: string, callback: () => void): void

declare function broadcast(message: string): void
