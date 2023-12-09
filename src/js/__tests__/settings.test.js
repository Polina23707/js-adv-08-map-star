import { Settings } from "../settings";

test('create errorRepository', () => {
  let settings = new Settings();
  let result = {defaultSettings: new Map([
    ['theme' , 'dark'],
    ['music' , 'trance'],
    ['difficulty' , 'easy']]), userSettings: new Map([])}
  expect(settings).toEqual(result);
});

test.each([
  ['theme' , 'blue' , new Map([])],
  ['background' , 'light' , new Map([])],
  ['music' , 'on', new Map([])],
  ['sound' , 'off', new Map([])],
  ['difficulty' , 'low', new Map([])],
  ['level' , 'hard', new Map([])],
])('testing incorrect setting %s and %s', (name , value , result) => {
  let settings = new Settings();
  settings.setUserSetting(name, value);
  console.log(settings.userSettings);
  expect(settings.userSettings).toEqual(result);
})

test('marge default and user settings', () => {
  let settings = new Settings();
  settings.setUserSetting('music' , 'pop');
  let result = settings.Settings;
  console.log(settings);
  let expected = new Map([
    ['theme' , 'dark'],
    ['music' , 'pop'],
    ['difficulty' , 'easy']
  ])
  expect(result).toEqual(expected);
});
