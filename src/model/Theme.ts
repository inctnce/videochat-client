import { Theme } from "@material-ui/core";

class AppTheme {
  private currentTheme: Theme;
  private light: Theme;
  private dark: Theme;

  private setTheme(): Theme {
    const sunrise: number = 8;
    const sunset: number = 21;
    const currentTime: number = new Date().getHours();

    return currentTime >= sunrise && currentTime <= sunset ? this.light : this.dark;
  }
  constructor(light: Theme, dark: Theme) {
    this.light = light;
    this.dark = dark;
    this.currentTheme = this.setTheme();
  }

  setLight(): void {
    this.currentTheme = this.light;
  }

  setDark(): void {
    this.currentTheme = this.currentTheme;
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }
}

export default AppTheme;
