import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import WordCard from '../word-card';
import {Row, Col} from 'react-flexgrid';
import {lightBlue50} from 'material-ui/styles/colors'

const style = {
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "transition": "all 0.5s linear"
};


const Vocabulary = React.createClass({
    render: function () {

        if (typeof this.props.words === 'undefined'
            || this.props.words.length == 0) {
            return null;
        }
        console.log(this.props.words)
        return (
            <Row>

                {getCards(this.props.words, this.props.showAnswerHandler, this.props.checkWordHandler)}
            </Row>
        );
    }
});

function getCards(words, showAnswerHandler, checkWordHandler) {

    return (words.map(word => {
        return (
            <Col key={"col-"+word.id} lg={3} xs={12} sm={12} md={6} style={style}>
                <WordCard word={word}
                          answer={word.translation}
                          showAnswerHandler={showAnswerHandler}
                          checkWordHandler={checkWordHandler}/>
            </Col>
        )
    }))
}

export default Vocabulary;