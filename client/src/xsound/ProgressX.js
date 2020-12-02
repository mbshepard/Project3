import React, {Component} from 'react';


export class ProgressX extends Component {

    componentWillUnmount() {
    }

    changed = (e) => {
        this.props.changed(e.target.value);
        console.log(e.target.value);
    };

    render() {
        const {pos, max} = this.props;
        return (
            <div>
                {Math.floor(pos)}<br/>
                0-<input onChange={this.changed}
                         type={"range"}
                         min={0}
                         max={max}
                         value={pos}
                         style={{width: 800}}
            />-{Math.floor(max)}
            </div>
        );
    }

}

