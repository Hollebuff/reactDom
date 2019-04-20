import React from 'react';
import View from './View';

// const App = () => (
//     <div>this is app</div>
// );
// export default Appp;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'text': '网站标题'
        }
    }
    render(){
        let text = this.state.text;
        return(<View text = {text} />)
    }
}
export default App;
