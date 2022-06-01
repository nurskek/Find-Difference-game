import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img1 from './pictures/img_difference.svg';
import img2 from './pictures/img_original.svg';



// requirements:
// 1. the total number of differences is shown
// 2. when user clicks on the difference, it should be highlighted (eg. circled)
// 3. when user clicks on the wrong spot, a red cross should appear.
// 4. when user finds all differences, a success sreen should appear. 

// better UI, more points
// use React

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // there should be some components
    //     }
    // }
    render() {
        return (
            <div className="App">
                <h1>Find <span id="dif_num">3</span> differences</h1>
                <div className="img_diff">
                    <img src={img1} alt="Different image"/>
                </div>
                <div className="img_orig">
                    <img src={img2} alt="Original image"/>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

