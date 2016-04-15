/*global document window require module clearInterval setInterval */
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
                    alignItems:'flex-start',
                    margin: 'auto'

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
                    height: this.state.sortingPadding,
                    display: 'block',
                    textAlign:'center',
                    margin:'0',
                    textDecoration:'none',
                    color:'#000',
                    fontFamily:'Century Gothic',
                    fontSize:'1.3em'
                },
                deactivate: {
                    color: '#D8D8D8'
                },
                divStyle:{
                    width:'30px',
                    height:'100%',
                    margin: 'auto'
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },


    getInitialState: function()
    {
        return ({
            sortingPadding: 0
        });
    },

    updateSortPadding:function(){
        var alpabethHeight = document.getElementById("alphabet").offsetHeight;
        var size = ((alpabethHeight/100)*80)/26;
        this.setState({sortingPadding: size});
    },

    componentDidMount: function() {
        window.addEventListener('resize', this.updateSortPadding);
        this.updateSortPadding();
    },

    componentWillUnmount: function() {
        document.removeEventListener('resize', this.updateSortPadding);
    },


    pClicked: function (letter) {
        var el = document.getElementById(letter);
        //el.scrollIntoView(); //next function make scrollIntoView but with smooth effect.
        if(el != null){
            clearInterval(this.scrollInterval);
            var startScroll = document.body.scrollTop;
            var i = document.body.scrollTop;
            var goTo = el.offsetTop - 95; // -95 is the size of the fixed header, so the element we want to screoll to never is showed under the header.
            var vel;
            if(goTo < 0){goTo = 10;}
            if(goTo > document.body.offsetHeight - window.innerHeight){goTo = document.body.offsetHeight - window.innerHeight;} //this help when the element we want to scroll to is lower than the maximun scroll posible.
            var that = this;
            this.scrollInterval = setInterval(function () {
                if(startScroll > goTo){
                    startScroll = document.body.scrollTop;
                    vel= (startScroll - goTo)/10;
                    i -= vel;
                    if(i <= goTo){clearInterval(that.scrollInterval);}

                }else{
                    startScroll = document.body.scrollTop;
                    vel= (goTo - startScroll)/10;
                    i += vel;
                    if(i >= goTo){clearInterval(that.scrollInterval);}

                }
                window.scrollTo(0, i);

             }, 100)
        }


    },


    render: function () {


        return(
        <div id="alphabet" style={this.styles().divStyle}>
                <p id="Asort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'A')}> A </p>
                <p id="Bsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'B')}> B </p>
                <p id="Csort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'C')}> C </p>
                <p id="Dsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'D')}> D </p>
                <p id="Esort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'E')}> E </p>
                <p id="Fsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'F')}> F </p>
                <p id="Gsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'G')}> G </p>
                <p id="Hsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'H')}> H </p>
                <p id="Isort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'I')}> I </p>
                <p id="Jsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'J')}> J </p>
                <p id="Ksort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'K')}> K </p>
                <p id="Lsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'L')}> L </p>
                <p id="Msort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'M')}> M </p>
                <p id="Nsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'N')}> N </p>
                <p id="Osort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'O')}> O </p>
                <p id="Psort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'P')}> P </p>
                <p id="Qsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'Q')}> Q </p>
                <p id="Rsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'R')}> R </p>
                <p id="Ssort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'S')}> S </p>
                <p id="Tsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'T')}> T </p>
                <p id="Uv" style={this.styles().actived} onClick={this.pClicked.bind(this, 'U')}> U </p>
                <p id="Vsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'V')}> V </p>
                <p id="Wsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'W')}> W </p>
                <p id="Xsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'X')}> X </p>
                <p id="Ysort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'Y')}> Y </p>
                <p id="Zsort" style={this.styles().actived} onClick={this.pClicked.bind(this, 'Z')}> Z </p>


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
                    height: '100%',
                    position:'fixed',
                    width:'5%',
                    overflow:'hidden',
                    display: 'inline'
                }
            }
        }
    },

    styles: function () {
        return this.css()
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