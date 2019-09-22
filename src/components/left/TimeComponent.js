/**
 * Created by Rksh on 31-Mar-17.
 */
import React, {Component} from 'react';
import moment from 'moment';

class TimeComponent extends Component {

    render() {
        return (
            <div className="card-block text-center text-justify">
                <h2>
                    <span id="clock">{moment().format('hh:mm:ss A')}</span>
                </h2>
            </div>
        );
    }

}

export default TimeComponent;
