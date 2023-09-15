import clear from '../image/clear.svg';
import nightclear from '../image/nightclear.svg';
import cloudy from '../image/cloudy.svg';
import nightcloudy from '../image/nightcloudy.svg';
import scatter from '../image/scatter.svg';
import clouds from '../image/clouds.svg';
import nightclouds from '../image/nightclouds.svg';
import showerrain from '../image/showerrain.svg';
import rain from '../image/rain.svg';
import nightrain from '../image/nightrain.svg';
import storm from '../image/storm.svg';
import snow from '../image/snow.svg';
import mist from '../image/mist.svg';
import sunny from '../backgroundimage/sunny.gif';
import cloudys from '../backgroundimage/cloudy.gif';
import rainny from '../backgroundimage/rainny.gif';
import snowy from '../backgroundimage/snow.gif'
import background from '../backgroundimage/background.jpeg'

const weatherIcons = {
  "01d": clear,
  "01n": nightclear,
  "02d": cloudy,
  "02n": nightcloudy,
  "03d": scatter,
  "03n": scatter,
  "04d": clouds,
  "04n": nightclouds,
  "09d": showerrain,
  "09n": showerrain,
  "10d": rain,
  "10n": nightrain,
  "11d": storm,
  "11n": storm,
  "13d": snow,
  "13n": snow,
  "50d": mist,
  "50n": mist,
};

const backgroundImages = {
  "01d": sunny,
  "01n": sunny,
  "02d": cloudys,
  "02n": cloudys,
  "03d": cloudys,
  "03n": cloudys,
  "04d": cloudys,
  "04n": cloudys,
  "09d": rainny,
  "09n": rainny,
  "10d": rainny,
  "10n": rainny,
  "11d": rainny,
  "11n": rainny,
  "13d": snowy,
  "13n": snowy,
  "50d": background,//default background
  "50n": background,
};

export { weatherIcons, backgroundImages };
