import { Dimensions, PixelRatio } from '../index';
PixelRatio.setBaseScreenSize(PixelRatio.baseDisplays.FHD);

const Style = {
  mainView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#aaaaaa'
  },
  button: {
    width: PixelRatio.getPixelSizeForLayoutSize(330),
    height: PixelRatio.getPixelSizeForLayoutSize(100),
    top: PixelRatio.getPixelSizeForLayoutSize(100),
    left: Dimensions.get('window').width / 2.35,
    },
  square:{
    width: PixelRatio.getPixelSizeForLayoutSize(100),
    height: PixelRatio.getPixelSizeForLayoutSize(100)
  },
  icon: {
    width: PixelRatio.getPixelSizeForLayoutSize(75),
    height: PixelRatio.getPixelSizeForLayoutSize(75),
    top: PixelRatio.getPixelSizeForLayoutSize(0),
    left:PixelRatio.getPixelSizeForLayoutSize(0),
  },
  numButton: function(number) {
    const row = Math.floor(number / 3) - (number % 3 ? 0 : 1);
    const col = number % 3 ? number % 3 : 3; // 0, 1, 2
    const width = PixelRatio.getPixelSizeForLayoutSize(100);
    const height = PixelRatio.getPixelSizeForLayoutSize(100);
    const padding = PixelRatio.getPixelSizeForLayoutSize(10);

    const left = (col - 1) * width + padding * col;
    const top = row * height + padding * row;

    return {
      height: height,
      width: width,
      backgroundColor: '#eeeeee',
      color: '#000000',
      left: left,
      top: top,
    };
  }
};

export { Style };
