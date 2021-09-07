import React, {Component} from 'react'
const Army = Men => {
    class NewMen extends Component {
        render() {
            return <Men hocgunname="AK46" />;
        }
    }
    return NewMen;
};

export default Army;