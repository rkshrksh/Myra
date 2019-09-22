/**
 * Created by Rksh on 31-Mar-17.
 */
import React, {Component} from 'react';
import moment from 'moment';

class DateComponent extends Component {

    render() {
        let date = moment().format('dddd, MMMM Do YYYY');

        return (
            <div className="card-header text-center" id="date">{date}</div>
        );
    }
}

export default DateComponent;
