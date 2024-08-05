declare function activeGamepads(): Array<Gamepad>
declare function gamepadconnected(callback: (event: GamepadEvent) => void): Promise<GamepadEvent>