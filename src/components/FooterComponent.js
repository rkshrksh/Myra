/**
 * Created by Rksh on 31-Mar-17.
 */
import React, { Component } from 'react';
const quotes = require('../data/quotes.json');

class FooterComponent extends Component {

    constructor() {
        super();
        this.state = {
            random: FooterComponent.randomInt(0, 101)
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            60000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            random: FooterComponent.randomInt(0, 101)
        });
    }

    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        return (
            <blockquote
                id="quoteCard" className="mb-0 blockquote blockquote-reverse bg-inverse text-white text-justify-end fixed-bottom hidden-sm-down">
                <p className="mb-0 lead" id="quote">
                    {quotes[this.state.random][0]}
                </p>
                <footer className="blockquote-footer text-white">
                    <cite title="Source Title" id="source">
                        {quotes[this.state.random][1]}
                    </cite>
                </footer>
            </blockquote>
        );
    }
}

export default FooterComponent;