/**
 * Created by Rksh on 31-Mar-17.
 */
import React, {Component} from 'react';

class NewsCard extends Component {

    render() {
        let array = this.props.items;
        let theClass = this.props.active + " carousel-item";
        return (
            <div className={theClass}>
                <ul className="list-group list-group-flush news-list1">
                    {
                        array.map((item, index) => (
                            React.createElement(
                                'li',
                                {
                                    className: 'list-group-item bg-inverse',
                                    key: index
                                },
                                "- "+item
                            )
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default NewsCard;