// ./tests/TwBgPaletteDefault.test.js

import { twBgPaletteDefault } from '../src/index'



test('twBgPaletteDefault component returns a truthy value', async () => {

    expect(twBgPaletteDefault).toBeTruthy()

})



test('twBgPaletteDefault.console component returns an object with a truthy console property', async () => {

    expect(twBgPaletteDefault.console).toBeTruthy()

})



test('twBgPaletteDefault.console.colors component returns an object with a truthy colors property', async () => {

    expect(twBgPaletteDefault.console.colors).toBeTruthy()

})



test('twBgPaletteDefault component returns an object with the standard five default color names', async () => {

    expect(twBgPaletteDefault.console.colors['default']).toBeTruthy()
    expect(twBgPaletteDefault.console.colors['error']).toBeTruthy()
    expect(twBgPaletteDefault.console.colors['primary']).toBeTruthy()
    expect(twBgPaletteDefault.console.colors['secondary']).toBeTruthy()
    expect(twBgPaletteDefault.console.colors['success']).toBeTruthy()

})
