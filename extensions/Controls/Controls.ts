declare function wait(seconds: number): Promise<void>

declare function waitFrames(_frames: number): Promise<void>

declare function repeat(times: number, callback: () => void): Promise<void>

declare function forever(callback: () => void, { _waitFrames, _condition }: { _waitFrames?: boolean, _condition?: () => boolean }): Promise<void>

declare function waitUntil(condition: () => boolean): Promise<void>

declare function repeatUntil(condition: () => boolean, callback: () => void): Promise<void>