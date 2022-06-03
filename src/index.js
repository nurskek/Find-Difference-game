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
            props.op()
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
        props.op()
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
            xOpacity: 0,
            total: 5,
            success: false,
            coordinateX: 100,
            coordinateY: 100,
        }
    }

    opacSet = () => {
        this.setState({
            xOpacity: 1,
        })
    }

    opacSetRight = () => {
        this.setState({
            xOpacity: 0,
        })
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
        let opac = this.state.xOpacity;
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

                                <Difference op={this.opacSetRight} param={this.totalSet} className="circle c1"/>
                                <Difference op={this.opacSetRight} param={this.totalSet} className="circle c2"/>
                                <Difference op={this.opacSetRight} param={this.totalSet} className="circle c3"/>
                                <Difference op={this.opacSetRight} param={this.totalSet} className="circle c4"/>
                                <Difference op={this.opacSetRight} param={this.totalSet} className="circle c5"/>
                                
                                <img style={{left: `${cX}px`, top: `${cY}px`, opacity: `${opac}`}} id="red_cross" src={crossPng} alt="Red cross"></img>
                                <Picture op={this.opacSet} par={this.coordinateSet} id="img_diff"></Picture>
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

