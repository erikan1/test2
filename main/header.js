import { Text, Component, Dimensions, PixelRatio } from '../index';
PixelRatio.setBaseScreenSize(PixelRatio.baseDisplays.FHD);
  
class Header extends Component {
    constructor() {
      super();
    }
    render() {
      return (
          <Text style={style}>{`Tic-Tac-Toe Game`}</Text>
      );
    }
  }
  

const style = {
    textAlign: 'center',
    width:
      Dimensions.get('window').width,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(50)
};

export { Header }