import {
  Component,
  Render,
  View,
  Alert,
  Button,
  Image,
} from '../index';
import { Style } from "./styles";
import { Header } from "./header"
import { Container } from "./container"
require('./images/red-o.png');
require('./images/red-x.png');


class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ],
      currentPlayer: 1 ,
    }
  }

  componentDidMount() {
    this.startNewGame();
  }

  startNewGame() {
    this.setState({gameState: [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ],
    currentPlayer: 1,
  });
  }

  determineWinner() {
    const three = 3;
    let arr = this.state.gameState;
    let sum;

    // for loop to check each row
    for (let i = 0; i < three; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {return 1;}
      else if (sum == -3) {return -1; };
    }

    // for loop to check each column
    for (let i = 0; i < three; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {return 1;}
      else if (sum == -3) {return -1; };
    }

    // checks for diagonals
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) {return 1;}
    else if (sum == -3) {return -1; };

    sum = arr[2][0] + arr[1][0] + arr[0][2];
    if (sum == 3) {return 1;}
    else if (sum == -3) {return -1; };

    // a draw
    return 0;
}

   onClick(row,col) {
     // cannot re-click and change the tile again
    let num = this.state.gameState[row][col];
    if (num !== 0) { return; }

     // set current player
    let currentPlayer = this.state.currentPlayer;

    // copy new grid, placemarker, set old grid to new grid
    let arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.state = {gameState: arr};

    //switch players
    let nextPlayer;
    if (currentPlayer == 1) {
      nextPlayer = -1
    } else { nextPlayer = 1}
    this.setState({currentPlayer: nextPlayer});

    //calls determineWinner() to check for winner on every button click
    let winner = this.determineWinner();
    if (winner == 1) {
      Alert.alert("Winner",
      "Player 1 is the winner!",
      [
        {text: 'OK', onPress: () => this.startNewGame()},
      ],
      { cancelable: false }
      );
    } else if (winner == -1) {
      Alert.alert("Winner",
      "Player 2 is the winner!",
      [
        {text: 'OK', onPress: () => this.startNewGame()},
      ],
      { cancelable: false }
    );}
  }

  placeMarker(row,col) {
    let value = this.state.gameState[row][col];
    switch(value)
    {
      case 1: return <Image source={{uri:"red-o"}} style={Style.icon}/> ;
      case -1: return <Image source={{uri:"red-x"}} style={Style.icon}/> ;
      default: return <View />;
    }
  }

  render() {
    return (
      <View style={Style.mainView}>
        <Header />
        <Button style={Style.button} onPress={this.startNewGame}>
            Start a new game
          </Button>
        <Container>

          <View
            style={Style.numButton(1)}
          ><Button style={Style.square} onPress={() => {this.onClick(0,0)}}
          >
            {this.placeMarker(0,0)}
          </Button>
          </View>
          <View
            style={Style.numButton(2)}
          ><Button style={Style.square} onPress={() => {this.onClick(0,1)}}
          >
          {this.placeMarker(0,1)}
          </Button>
          </View>
          <View
            style={Style.numButton(3)}
          ><Button style={Style.square} onPress={() => {this.onClick(0,2)}}
          >
            {this.placeMarker(0,2)}

          </Button>
          </View>
          <View
            style={Style.numButton(4)}
          ><Button style={Style.square} onPress={() => {this.onClick(1,0)}}
          >
            {this.placeMarker(1,0)}

          </Button>
          </View>
          <View
            style={Style.numButton(5)}
          ><Button style={Style.square} onPress={() => {this.onClick(1,1)}}
          >
            {this.placeMarker(1,1)}

          </Button>
          </View>
          <View
            style={Style.numButton(6)}
          ><Button style={Style.square} onPress={() => {this.onClick(1,2)}}
          >
            {this.placeMarker(1,2)}

          </Button>
          </View>
          <View
            style={Style.numButton(7)}
          ><Button style={Style.square} onPress={() => {this.onClick(2,0)}}
          >
            {this.placeMarker(2,0)}

          </Button>
          </View>
          <View
            style={Style.numButton(8)}
          ><Button style={Style.square} onPress={() => {this.onClick(2,1)}}
          >
            {this.placeMarker(2,1)}

          </Button>
          </View>
          <View
            style={Style.numButton(9)}
          ><Button style={Style.square} onPress={() => {this.onClick(2,2)}}
          >
            {this.placeMarker(2,2)}
          </Button>
          </View>
        </Container>
      </View>
    );
  }
}

Render(Game);
