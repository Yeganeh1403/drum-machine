class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      display: ""
    }
  }

  handleClick = (event) => {
    event.target.querySelector(".clip").play();
    this.setState({
      display: event.target.id
    })
  }

  handlePress = (event) => {
    const key = event.key.toUpperCase();
    const audio = document.getElementById(key);
    if (audio) {
      audio.play();
      const drumPad = audio.parentElement;
      this.setState({
        display: drumPad.id
      });
      drumPad.classList.add("active");

      setTimeout(() => {
        drumPad.classList.remove("active")
      }, 100)
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handlePress);
  }

  render () {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
          <div onClick={this.handleClick} className="drum-pad" id="Heater1">Q<audio className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" id="Q"></audio></div>
          <div onClick={this.handleClick} className="drum-pad" id="Heater2">W<audio className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" id="W"></audio></div>
          <div onClick={this.handleClick} className="drum-pad" id="Heater3">E<audio className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" id="E"></audio></div>
          <div onClick={this.handleClick} className="drum-pad" id="Heater4">A<audio className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" id="A"></audio></div>
          <div onClick={this.handleClick} className="drum-pad" id="Clap">S<audio className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" id="S"></audio></div>
          <div onClick={this.handleClick} className="drum-pad" id="Open-HH">D<audio className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" id="D"></audio></div>
          <div onClick={this.handleClick} className="drum-pad" id="Kick-n'-Hat">Z<audio className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" id="Z"></audio></div>
          <div onClick={this.handleClick} className="drum-pad" id="Kick">X<audio className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" id="X"></audio></div>
          <div onClick={this.handleClick} className="drum-pad" id="Closed-HH">C<audio className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" id="C"></audio></div>
        </div>
      </div>
    )
  }
}
//hi
ReactDOM.render(<App />, document.getElementById('root'));
