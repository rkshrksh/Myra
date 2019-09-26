/**
 * Created by Rksh on 01-Apr-17.
 */
import React, {Component} from 'react'


class NotificationComponent extends Component {

    constructor() {
        super();

        this.state = {
            notifications: []
        };

        let websocket = new WebSocket('wss://stream.pushbullet.com/websocket/'
        + process.env.REACT_APP_PUSHBULLET_KEY
        );

        websocket.onopen = () => {
            console.log("onopen");
        };

        websocket.onmessage = (m) => {
            // console.log("onmessage");

            let data = JSON.parse(m.data);

            if (data.type === "push") {
                // console.log("push");

                if (data.push.type === "mirror" && (this.checkNotification(data.push.title) === undefined)) {
                    console.log("mirror");

                    let array = {
                        id: data.push.notification_id,
                        app_name: data.push.application_name,
                        title: data.push.title,
                        body: data.push.body
                    };

                    let notify = this.state.notifications;

                    notify.push(array);

                    if (notify.length > 5) {
                        notify.splice(0, 1);
                        console.log("truncated");
                    }

                    this.setState({
                        notifications: notify
                    });
                }
                else if (data.push.type === "dismissal") {
                    console.log("dismiss");
                    this.setState({
                        notifications: this.dismissNotification(data.push.notification_id)
                    })
                }
            }

        }
    }

    // remove the notification from the state
    dismissNotification(id) {
        return this.state.notifications.filter((el) => {
            return !(el.id === id);
        });
    }

    // check if the notification already exists in the state
    checkNotification(title) {
        return this.state.notifications.find((el) => {
            return (el.title === title);
        });
    }

    render() {
        // console.log(this.state.notifications);
        return (
            <ul>
                {
                    this.state.notifications.map((notif) =>
                        React.createElement(
                            'li',
                            {
                                key: notif.title,
                                className: "lead"
                            },
                            notif.app_name + ": " + notif.title
                        )
                    )
                }
            </ul>
        );
    }
}

export default NotificationComponent;