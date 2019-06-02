import * as React from "react";
import * as ReactDOM from "react-dom";
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';
import printJS from 'print-js'


class App extends React.Component<any, any>{

    myRef: React.RefObject<HTMLDivElement>;
    iframeRef: React.RefObject<HTMLIFrameElement>;

    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.iframeRef = React.createRef();
    }

    toPdf(){
        html2canvas(this.myRef.current).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jspdf();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.autoPrint();
            const blob = pdf.output('blob');
            printJS(URL.createObjectURL(blob));
              
        });
    }

    render(){
        return (
            <div>
                <div ref={this.myRef}>
                    <h1>Hello World2</h1>
                    <button onClick={()=>{this.toPdf()}}>html2canvas</button>
                </div>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
