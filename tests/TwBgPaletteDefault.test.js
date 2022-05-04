// ./tests/TwBgPaletteDefault.test.js

import { twBgPaletteDefault } from '../src/index'



test('twBgPaletteDefault component returns a truthy value', async () => {

    expect(twBgPaletteDefault).toBeTruthy()

})



test('twBgPaletteDefault.default component returns an object with a truthy default property', async () => {

    expect(twBgPaletteDefault.default).toBeTruthy()

})



test('twBgPaletteDefault.default.colors component returns an object with a truthy colors property', async () => {

    expect(twBgPaletteDefault.default.colors).toBeTruthy()

})



test('twBgPaletteDefault component returns an object with the standard five default color names', async () => {

    expect(twBgPaletteDefault.default.colors['default']).toBe('')
    expect(twBgPaletteDefault.default.colors['error']).toBeTruthy()
    expect(twBgPaletteDefault.default.colors['primary']).toBeTruthy()
    expect(twBgPaletteDefault.default.colors['secondary']).toBeTruthy()
    expect(twBgPaletteDefault.default.colors['success']).toBeTruthy()

})
