import React from 'react';
import WordCard from '../word-card/index';
import {Row, Col} from 'react-flexgrid';

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
        return (
            <Row>
                {getCards(this.props.words, this.props.showAnswerHandler, this.props.checkWordHandler)}
            </Row>
        );
    }
});

function getCards(words, showAnswerHandler) {

    return (words.map(word => {
        return (
            <Col key={"col-"+word.wordId} lg={3} xs={12} sm={12} md={6} style={style}>
                <WordCard word={word}
                          question={word.question}
                          answer={word.answer}
                          showAnswerHandler={showAnswerHandler}
                />
            </Col>
        )
    }))
}

export default Vocabulary;