export class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme' , 'dark'],
      ['music' , 'trance'],
      ['difficulty' , 'easy']
    ])
    this.userSettings = new Map([])
  }

  setUserSetting(name, value) {
    let theme = ['dark' , 'light' , 'gray'];
    let music = ['trance' , 'pop' , 'rock' , 'chillout' , 'off'];
    let difficulty = [ 'easy' , 'normal' , 'hard' , 'nightmare'];

    let settings = {
      theme,
      music,
      difficulty
    }

    if (Object.keys(settings).includes(name)) {
      if (settings[name].includes(value)) {
        this.userSettings.set(name, value);
      }
    } 
  }

  get Settings () {
    let margedSetting = this.defaultSettings;
    
    // console.log(this.defaultSettings);
    // console.log(this.userSettings);
    let userSettingsArray = [...this.userSettings.keys()];
    // console.log(userSettingsArray);
    userSettingsArray.forEach((set) => {
      // console.log(set);
      // console.log(this.userSettings.get(set));
      margedSetting.set(set, this.userSettings.get(set));
    })
    // console.log(margedSetting);
    return margedSetting;
  }
}