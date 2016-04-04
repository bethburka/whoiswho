/**
 * Created by jose.bustamante on 3/31/2016.
 */

'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var Sort = React.createClass({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                actived: {
                    border: '0px solid #fff',
                    padding: '0px',
                    width: '30px',
                    background: '#fff',
                    display:'block'
                },
                divStyle: {
                    width:'30px',
                    height:'20px',
                    alignItems:'flex-start'

                }
            }
        }
    },

    styles: function () {
        return this.css()
    },

    orderList: function () {

    },

    render: function () {
        return(
            <div style={this.styles().divStyle}>
                <button id="button-sort" type="submit" onClick={this.orderList} style={this.styles().actived}>sort</button>
            </div>
        );
    }
});

var Letter = React.createClass({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                actived: {
                    width: '30px',
                    height:'20px',
                    lineHeight: '20px',
                    display: 'block',
                    textAlign:'center'
                },
                deactivate: {
                    color: '#D8D8D8'
                },
                divStyle:{
                    width:'30px',
                    height:'500px',
                    display: 'block',
                    position: 'absolute',
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },

    render: function () {

        return(
        <div id="alphabet" style={this.styles().divStyle}>
                <a href="#A" style={this.styles().actived}> A </a>
                <a href="#B" style={this.styles().actived}> B </a>
                <a href="#C" style={this.styles().actived}> C </a>
                <a href="#D" style={this.styles().actived}> D </a>
                <a href="#E" style={this.styles().actived}> E </a>
                <a href="#F" style={this.styles().actived}> F </a>
                <a href="#G" style={this.styles().actived}> G </a>
                <a href="#H" style={this.styles().actived}> H </a>
                <a href="#I" style={this.styles().actived}> I </a>
                <a href="#J" style={this.styles().actived}> J </a>
                <a href="#K" style={this.styles().actived}> K </a>
                <a href="#L" style={this.styles().actived}> L </a>
                <a href="#M" style={this.styles().actived}> M </a>
                <a href="#N" style={this.styles().actived}> N </a>
                <a href="#O" style={this.styles().actived}> O </a>
                <a href="#P" style={this.styles().actived}> P </a>
                <a href="#Q" style={this.styles().actived}> Q </a>
                <a href="#R" style={this.styles().actived}> R </a>
                <a href="#S" style={this.styles().actived}> S </a>
                <a href="#T" style={this.styles().actived}> T </a>
                <a href="#U" style={this.styles().actived}> U </a>
                <a href="#V" style={this.styles().actived}> V </a>
                <a href="#W" style={this.styles().actived}> W </a>
                <a href="#Z" style={this.styles().actived}> Z </a>

        </div>
        );
    }
});

var SorfList = React.createClass({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                sortListStyle: {
                    height: '500px',
                    position: 'absolute',
                    top: '15%',
                    paddingLeft :'15px',
                    right: '15px'
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },

    componentDidMount() {
        // Decode entities in the URL
        // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#');
            if (hashParts.length > 2) {
                const hash = hashParts.slice(-1)[0];
                document.querySelector(`#${hash}`).scrollIntoView();
            }
        };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor;
    },

    render: function () {

        return(
        <div style={this.styles().sortListStyle}>
            <Sort/>
            <Letter/>
        </div>
        );
    }
});



module.exports = SorfList;