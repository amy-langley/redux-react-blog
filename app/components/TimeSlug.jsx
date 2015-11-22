import React from 'react'
import styles from '../App.css'
import moment from 'moment'

export default class TimeSlug extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var interval = 5000;
        window.setInterval(this.forceUpdate.bind(this), interval);
    }

    render(){
        var when = this.props.when;
        var postTime = moment(when).format('h:mma');
        var postDate = moment(when).format('YYYY/MM/DD');
        var postStamp = [postTime, postDate].join(' on ');
        return <abbr title={postStamp}>{moment(when).fromNow()}</abbr>;
    }

}
