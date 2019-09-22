/**
 * Created by Rksh on 31-Mar-17.
 */
import React, {Component} from 'react';
import NotificationComponent from "./NotificationComponent";

class CenterComponent extends Component {
    render() {
        return (
            <div className="col-md mt-3" id="midCol">
                <NotificationComponent/>
            </div>
        );
    }
}

export default CenterComponent;
