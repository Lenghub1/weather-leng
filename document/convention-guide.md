# General
-  The browser's default style can be removed with a CSS reset. There is a CSS reset function in index.css.

- Colors:

  - black: black

- Font:
  - Font family: `Inter` , sans-serif
  - Paragraph font size: `16px`

- No inline CSS
# Project folder structure

```
|--- document/
|    |--- convention-guide.md
|
|--- node_modules/
|
|--- public/
|
|--- src/
|
|    |--- backgroundimage/
|    |
|    |--- component/
|    |
|    |    |--- AnimatedNumber.jsx
|    |
|    |    |--- loading.jsx
|    |   
|    |    |--- loading.css
|    |
|    |    |--- search.css
|    |    
|    |    |--- search.jsx
|    |         
|    |    |--- weather.css
|    |         
|    |    |--- weather.jsx
|    |         
|    |    |--- WeatherImage.js
|    |
|    |    |--- week.css
|    |  
|    |    |--- weekweather.jsx
|    |
|    |--- data /
|    |
|    |--- image/
|    |
|--- App.css
|--- App.jsx
|--- index.css
|--- main.jsx

```
# My index.css root
```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  --color-black: black:
  --roboto: "Inter", sans-serif;
  --paragraph: 16px;
  --paragraphM: 14px
}
```
# Must follow
 ## Flex:

 - `flex` :  display flex

 - `flex-col` :  flex-direction column

 - `text-center`:  text-center center

 - `space-between`:  justify-content space-between

 - `justify-center`: justify-content center
 - `evenly` : justify-content space-evenly

## how to use:
```html
<div className="weather flex evenly align-center">
  ```
 ## gap:
 - gap : gap 12px

 ## Grid:
 - grid : display grid
 - grid-2 : grid-template-columns 1fr 1fr
 
# Naming convention
Class Naming
Use clear and descriptive class names to make your code more maintainable and readable.
``` css
.week{

}
.search input{

}
```

Varibles and Functions:

Use description names that convey the purpose of the vairable or function.
Follow CamelCase for function and method names
``` jsx
 const getWeekday = (date) => {
    
  };
```
# Commnents:
- Use comments to explain complex logic, especially in functions that have multiple steps.
- Use // for single line comment.
```jsx
// Function to fetch weather data from the API
  const fetchWeatherData async (lat, lon) => {

  }
```
