import React, {Component} from 'react';

export default class Profile extends Component {
    state = {
        user: {
            fullName: 'Alex',
            phoneNumber: '+375443434343',
            address: 'Strit_4',
        }
    }

    render() {
        return (
            <div>
                <div>
                    <span>
                        {this.state.user.fullName}
                    </span>
                </div>
                <div>
                    <span>
                        {this.state.user.phoneNumber}
                    </span>
                </div>
                <div>
                    <span>
                        {this.state.user.address}
                    </span>
                </div>
            </div>
        )
    }
}

