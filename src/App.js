import './App.css';
import React, { Component } from "react";

/**
 * The default example is a function, but we'll refactor this to a class
 * Then, we'll use some simple state and a simple UI presentation
 */

export default class AppComponent extends Component {

    /**
     * Create a constructor so we can initialize our own fields
     */
    constructor(props) {
        super(props);

        // initialize the state
        this.state = {
            randNumVal: this.newRandomNumber(),
            data: '',
            print: false,
        };
        this.inputFullNameRef = React.createRef()
        // bind "this" to callbacks so we have reference to the instance
        this.updateRandNumVal = this.updateRandNumVal.bind(this);
        this.printData = this.printData.bind(this);
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const data1 = this.state
      // console.log(this.inputFullNameRef.current.value)
      console.log("Final data is", data1)
  }

  handleInputChange = (event) => {
      event.preventDefault()
     // console.log(event)
     // console.log(event.target.name)
     // console.log(event.target.value)
     this.setState({
         [event.target.name]: event.target.value
     })
  }
  
  _showMessage = (bool) => {
    this.setState({
      print: false,
      data: ''
    });
  }

  // componentDidMount(){
  //     this.inputFullNameRef.current.focus()
  // }

    

    render() {
        return (
            <div className="App">
              <form onSubmit={this.handleSubmit}>
            
                <header className="App-header">
                    <p>
                        Encrypt Text
                    </p>
                </header>
                <p>Click the button below to generate a random number & encrypted text:</p>
                <input class="App-textbox" type="text" onChange={this.printData} />
                <br/><br/>
                <button data-testid="test-input" input type="text" className="App-button" onClick={this.updateRandNumVal}>Submit!</button>
                
                { this.state.print && (
                <div>
                <p className="App-rand-val">Random key generated : {this.state.randNumVal}</p>
                <p className="App-rand-val">Original Text : {this.state.data}</p>
                Encrypted Text : <span id="myP" className="App-rand-val"></span>
                </div>
                ) }
        </form>
            </div>
        );

    }

    /**
     * Update the state with a new random number
     * Be sure to create new state object
     * instead of mutating existing one
     */
    async updateRandNumVal() {
      const a= [];

        await this.setState({
            ...this.state,
            randNumVal: this.newRandomNumber(),
            print:true,
            encrypttext:''
            
        });
          for (var i = 0; i < this.state.data.length; i++) {
            if (this.state.data.charAt(i) === 'a' || this.state.data.charAt(i) === 'e' || this.state.data.charAt(i) === 'i' || 
              this.state.data.charAt(i) === 'o' || this.state.data.charAt(i) === 'u' || this.state.data.charAt(i) === 'A' || this.state.data.charAt(i) === 'e'
              || this.state.data.charAt(i) === 'I' || this.state.data.charAt(i) === 'O'  || this.state.data.charAt(i) === 'U')
              {
                  console.warn(String.fromCharCode(this.state.data.charCodeAt(i) + Number(String(this.state.randNumVal).charAt(0))))
                  a.push(String.fromCharCode(this.state.data.charCodeAt(i) + Number(String(this.state.randNumVal).charAt(0))))
                //console.log(a);
              }
              else if(this.state.data.charAt(i) === ' ' ){
                a.push(" ")
              }
              else if(this.state.data.charAt(i) === this.state.data.charAt(i).toUpperCase()){
                const bigchar = this.state.data.charAt(i).toString().toLowerCase()
                const unicode = bigchar.charCodeAt(i)
                console.log(unicode)
                a.push(String.fromCharCode(unicode + Number(String(this.state.randNumVal).charAt(1))))
                console.log(a)
              }
              else if(this.state.data.charAt(i) === this.state.data.charAt(i).toUpperCase() ){
                const bigchar = this.state.data.charAt(i).toString().toLowerCase()
                const unicode = bigchar.charCodeAt(i)
                console.log(unicode)
                a.push(String.fromCharCode(unicode + Number(String(this.state.randNumVal).charAt(1))))
                console.log(a)
              }
            else
            {
              if(this.state.data.charCodeAt(i) + Number(String(this.state.randNumVal).charAt(1)) > 122){
                a.push(String.fromCharCode(this.state.data.charCodeAt(i) + Number(String(this.state.randNumVal).charAt(1)) - 122 + 96))
              }else{
                  console.warn(String.fromCharCode(this.state.data.charCodeAt(i) + Number(String(this.state.randNumVal).charAt(1))))
                  a.push(String.fromCharCode(this.state.data.charCodeAt(i) + Number(String(this.state.randNumVal).charAt(1))))
            }
            }
          }
          document.getElementById("myP").innerHTML = a.join('');
    }

    /**
     * Return a random number from  -1000 to 1000
     */
    newRandomNumber() {
        return Math.floor(Math.random() * (99 - 11 + 1)) + 11;
    }


  getData(val)
  {
    console.warn(val.target.value)
  }

  printData(val)
  {
    return this.setState({data: val.target.value})
  }

  vowelOrConsonant()
    {
    for (var i = 0; i < this.state.data.length; i++) {
        if (this.state.data.charAt(i) === 'a' || this.state.data.charAt(i) === 'e' || this.state.data.charAt(i) === 'i' || 
        this.state.data.charAt(i) === 'o' || this.state.data.charAt(i) === 'u')
            console.warn("Vowel");
        else
            console.warn("Consonant");
    }
    }

}
