/**
 * Created by Rksh on 01-Apr-17.
 */
import React, {Component} from 'react';
import NewsComponent from "./NewsComponent";

class RightComponent extends Component {
    render() {
        return (
            <div className="col-md-5 col-lg-4 mb-2">
                <NewsComponent/>
            </div>
        );
    }
}

export default RightComponent;