import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img1 from './pictures/img_difference.svg';
import img2 from './pictures/img_original.svg';
import {useState} from 'react'


// requirements:
// 1. the total number of differences is shown (DONE)
// 2. when user clicks on the difference, it should be highlighted (eg. circled) (DONE)
// 3. when user clicks on the wrong spot, a red cross should appear. ()
// 4. when user finds all differences, a success sreen should appear. ()

// better UI, more points
// use React

function Difference(props){

    const [showCircle, setShowCircle] = useState(0)
    const [here, setHere] = useState(1)
    
    const changeCircle = (e) => {
        setShowCircle(1)
        setHere(0)
        props.param()
    }

    return(
        <div style = {{opacity: showCircle}} className={props.className} onClick={(e) => changeCircle(e)}></div>
    )
}

// function that show X when clicked

class App extends React.Component {

    // const [total, setTotal] = useState(5)
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            total: 5,
            success: false,
            // paramVal: "0",
        }
    }

    // renderCircle(i) {
    //     return <Difference value={i} />;
    //   }

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

    // successWindowCaller = () => {
    //     let tempo = this.state.success;
    //     if(tempo === false) 
    // }

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
                    <div className="column" >
                        {/* <div style={{ opacity: ourCircle }} className="circle c1" onClick={(e) => this.rightClick()}></div> */}
                        <Difference param={this.totalChanger} className="circle c1"/>
                        {/* param={parVal} */}
                        <Difference param={this.totalChanger} className="circle c2"/>
                        <Difference  param={this.totalChanger} className="circle c3"/>
                        <Difference  param={this.totalChanger} className="circle c4"/>
                        <Difference  param={this.totalChanger} className="circle c5"/>
                        <img id="img_diff" src={img1} alt="Different image"/>
                    </div>
                    <div className="column">
                        <Difference param={this.totalChanger} className="circle c1"/>
                        {/* param={parVal} */}
                        <Difference param={this.totalChanger} className="circle c2"/>
                        <img id="img_orig" src={img2} alt="Original image"/>
                    </div>
                </div>
                    
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

