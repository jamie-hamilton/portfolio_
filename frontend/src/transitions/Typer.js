import React from 'react';

// Store timeouts here to clear on unmount
var timeouts = []

class Typer extends React.Component {

    state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
    }

    componentDidMount() {
        timeouts.push(setTimeout(this.handleType, 1000));
    }

    componentWillUnmount() {
        // Clear all timeouts
        for (var i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }
        timeouts = [];
    }
  
    handleType = () => {
        const { dataText, infinite } = this.props;
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        const i = loopNum % dataText.length;
        const fullText = dataText[i];
        
        this.setState({
            // Current state of text string
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
            // Typing and delete speeds
            typingSpeed: isDeleting ? 30 : 150
        });

        if (!isDeleting && text === fullText) {
            // Exit function at end of word if inifinite set to false
            if (infinite) {
                timeouts.push(setTimeout(() => this.setState({ isDeleting: true }), 500));  
            }
            else {
                return;
            };
        }
        else if (isDeleting && text === '') {
            // Set isDeleting to false when string is empty
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
            });      
        }
        
        // Loop through function at specified speed
        timeouts.push(setTimeout(this.handleType, typingSpeed));
    };
  
    render() {    
      return (
        <span>{ this.props.startText }&nbsp;
          <span style={{wordWrap: "break-word"}}>{ this.state.text }</span>
          <span className="cursor"></span>
        </span>
      );
    }
}

export default Typer;