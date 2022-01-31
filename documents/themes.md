Theme file should be in `<root>/data/themes` with name `index.js`  
You can fill index.js theme file with below code and change values of properties

```tsx
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");
module.exports = {
  colors: {
    primary: colors.gray,
    secondary: colors.blue,
  },
  fontFamily: {
    title: ["Roboto", ...defaultTheme.fontFamily.sans],
    subtitle: ["handlee", ...defaultTheme.fontFamily.sans],
  },
  fontFamilyUrls: {
    title: "https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap",
    subtitle: "https://fonts.googleapis.com/css2?family=Handlee&display=swap",
  },
  screens: {
    'xs': '320px',
    's': '475px',
    ...defaultTheme.screens,
  },
};

```