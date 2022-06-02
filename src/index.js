import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img1 from './pictures/img_difference.svg';
import img2 from './pictures/img_original.svg';
import {useState} from 'react'


// requirements:
// 1. the total number of differences is shown
// 2. when user clicks on the difference, it should be highlighted (eg. circled)
// 3. when user clicks on the wrong spot, a red cross should appear.
// 4. when user finds all differences, a success sreen should appear. 

// better UI, more points
// use React

function Difference(props){

    const [showCircle, setShowCircle] = useState(0)
    
    const changeCircle = (props) => {
        setShowCircle(1)
        // props.setState = {
        //     paramVal: "1",
        // }
    }


    return(
        <div style = {{opacity: showCircle}} className={props.className} onClick={(e) => changeCircle(props.onClick)}></div>
    )
}

// function that show X when clicked

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 5,
            // paramVal: "0",
        }
    }

    // changer() {
    //     this.setState(prevState => ({
    //         paramVal: "1",
    //     }))
    // }

    totalChanger = () => {
        let tempo = this.state.total;
        this.setState({
            total: tempo - 1
            }
        );

        // if(total === 0) {
        //     return (
                
        //     )
        // }
    }

    render() {
        // let parVal = this.state.paramVal;
        let totalNum = this.state.total

        return (
            <div className="App">
                <h1>Find <span id="dif_num">{totalNum}</span> differences</h1>
                 
                <div className="row">
                    <div className="column" onClick={this.totalChanger}>
                        {/* <div style={{ opacity: ourCircle }} className="circle c1" onClick={(e) => this.rightClick()}></div> */}
                        <Difference  className="circle c1"/>
                        {/* param={parVal} */}
                        <Difference className="circle c2"/>
                        <Difference  className="circle c3"/>
                        <Difference  className="circle c4"/>
                        <Difference  className="circle c5"/>
                        <img id="img_diff" src={img1} alt="Different image"/>
                    </div>
                    <div className="column">
                        <Difference className="circle c1"/>
                        {/* param={parVal} */}
                        <Difference className="circle c2"/>
                        <img id="img_orig" src={img2} alt="Original image"/>
                    </div>
                </div>
                    
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

