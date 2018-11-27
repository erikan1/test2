import { View, Component, Dimensions, PixelRatio} from '../index';
PixelRatio.setBaseScreenSize(PixelRatio.baseDisplays.FHD);
  
class Container extends Component {
    constructor() {
      super();
    }
    render() {
      return (
        <View style={style}> {this.props.children} </View>
        );
    }
  }
  

const style = {
    width: PixelRatio.getPixelSizeForLayoutSize(600),
    height: PixelRatio.getPixelSizeForLayoutSize(600),
    top: Dimensions.get('window').height / 4,
    left: Dimensions.get('window').width / 2.35
};

export { Container }