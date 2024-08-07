declare function wait(seconds: number): Promise<void>

declare function waitFrames(_frames: number): Promise<void>

declare function repeat(times: number, callback: (index: number) => void): Promise<void>

declare function forever(callback: (index: number) => void, { _waitFrames, _condition }: { _waitFrames?: boolean, _condition?: () => boolean }): Promise<void>

declare function waitUntil(condition: (index: number) => boolean): Promise<void>

declare function repeatUntil(condition: (index: number) => boolean, callback: (index: number) => void): Promise<void>