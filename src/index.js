import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img1 from './pictures/img_difference.svg';
import img2 from './pictures/img_original.svg';
import {useState} from 'react'
import crossPng from './pictures/red_cross.png'

function Difference(props){
    const [showCircle, setShowCircle] = useState(0)
    
    const changeCircle = (e) => {
        if(showCircle === 0) {
            setShowCircle(1)
            props.param()
        }
    }

    return(
        <div 
            style = {{opacity: showCircle}} 
            className={props.className} 
            onClick={(e) => changeCircle(e)}
        ></div>
    )
}

function Picture(props){

const clickControl = (e) => {
    props.par(e.clientX, e.clientY)
    console.log("x coor", e.clientX)
    console.log("y coor", e.clientY)
}
    return(
        <img 
            id={props.id} 
            src={img1} 
            alt="Different" 
            onClick={(e)=>clickControl(e)} />
    )
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            xOpacity: false,
            total: 5,
            success: false,
            coordinateX: 100,
            coordinateY: 100,
        }
    }

    coordinateSet = (x, y) => {
        const xVal = x
        const yVal = y
        this.setState({
            coordinateX: xVal - 29,
            coordinateY: yVal - 139,
            }
        )
    }

    totalSet = () => {
        let tempo = this.state.total;
        let tempoSuccess = this.state.success;
        this.setState({
            total: tempo - 1
            }
        );

        if(this.state.total === 1) {
            this.setState({
                success: !tempoSuccess,
                }
            );  
        }
    }

    render() {
        let totalVal = this.state.total
        const successVal = this.state.success
        let cX = this.state.coordinateX
        let cY = this.state.coordinateY

        return (
            <div className="App">
                {successVal ? (
                    <>
                        <h1 id="successText">Success!</h1>
                    </>
                ) : (
                    <>
                        <h1>Find <span id="dif_num">{totalVal}</span> differences</h1>
                        <h3>Find out the difference and click on the left picture</h3>
                 
                        <div className="row">
                            <div className="column" >
                                {/* <div style={{ opacity: ourCircle }} className="circle c1" onClick={(e) => this.rightClick()}></div> */}
                                <Difference param={this.totalSet} className="circle c1"/>
                                {/* param={parVal} */}
                                <Difference param={this.totalSet} className="circle c2"/>
                                <Difference  param={this.totalSet} className="circle c3"/>
                                <Difference  param={this.totalSet} className="circle c4"/>
                                <Difference  param={this.totalSet} className="circle c5"/>
                                
                                <img style={{left: `${cX}px`, top: `${cY}px`}} id="red_cross" src={crossPng} alt="Red cross"></img>
                                <Picture par={this.coordinateSet} id="img_diff"></Picture>
                                {/* <img id="img_diff" src={img1} alt="Different" /> */}
                                {/* <img id="img_diff" src={img1} alt="Different" /> */}
                            </div>
                            <div className="column">
                                <img id="img_orig" src={img2} alt="Original"/>
                            </div>
                        </div>
                    </>  
                )}   
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

