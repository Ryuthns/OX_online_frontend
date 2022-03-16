import Board from "./Board"
import React from "react";
import oxService from "./services/ox.service";
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}


class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          history: [{
            squares: Array(9).fill(null),
          }],
          stepNumber: 0,
          xIsNext: true,
          startwith: null,
          disable : null
        };
        
    }

    getalldata=()=>{
      oxService.getAll().then((res)=>{
        let new_history;
        let cur;
       
        if(res.data.length!==0){
              new_history = this.state.history;
              cur =  res.data[res.data.length-1].current_board.split(",");
              for(let i =0;i<cur.length;i++){
                if(cur[i] ===''){
                    cur[i]=null;
                }
              }
              new_history=[{squares:cur}];
              this.setState({ ...this.state, history:new_history, xIsNext:!(res.data[res.data.length-1].turn ==='X')});
        }else{
          this.setState( {
            history: [{
              squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
          });
        }
        })

        this.setState({...this.state, disable: !this.state.disable})
    }

    componentDidMount(){
      this.getalldata()
       this.interval = setInterval(
        () => {this.getalldata()},1000)
      }
    componentWillUnmount() {
        clearInterval(this.interval);
      }

    handleClick(i) {
      clearInterval(this.interval);
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      

      const state_obj={
          current_board: squares.toString(),
          turn: this.state.xIsNext?'X':'O'
      };

      if(!this.state.xIsNext && (this.state.startwith === "X")){
        this.interval = setInterval(
          () => {this.getalldata()},1000)
        return;
      }
      if(this.state.xIsNext && (this.state.startwith === "O")){
        this.interval = setInterval(
          () => {this.getalldata()},1000)
        return;
      }

      //Send request to update state
        oxService.create(state_obj).then((res)=>{
          this.setState({
            history: history.concat([{
              squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
          });
        });
        this.interval = setInterval(
          () => {this.getalldata()},1000)
        this.setState({...this.state, disable:!this.state.disable})
    }

    clear_board(){
      oxService.deleteAll().then((res)=>{
        window.location.reload();
      })

    }

    jumpTo(step) {
      this.setState({
        ...this.state,
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.history.length-1];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
        status = 'Winner: ' + winner;
        } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div >
                
              {this.state.startwith ? 
                (<div className="game"><div className="game-board">
                  <Board
                    squares={current.squares}
                    onClick={(i)=>this.handleClick(i)}
                    disable = {this.state.disable}
                  />
                </div>
                <div className="game-info">
                  <div><button onClick={this.clear_board}>Clear Board</button></div>
                  <div>{status}</div>
                </div></div>)  
                : (<div>
                  <div className="game">
                    <button onClick={()=>{this.setState({...this.state,startwith:'X',disable:false})}}>X</button>
                    <button onClick={()=>{this.setState({...this.state,startwith:'O',disable:true})}}>O</button>
                  </div>
                </div>)}
                
            </div>
        );
    }
  }

export default Game;