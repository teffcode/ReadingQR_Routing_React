import React, { Component } from 'react';
import Scores from './Scores';

const Question = ({ questions, nextQuestion, isFinished }) => {
    return isFinished
        ? <div><Scores /><button onClick={nextQuestion}>Next</button> </div>
        :
        <div>
            <div>{questions.pregunta}</div>
            <ul>
                {questions.respuestas.map(respuesta => <li>{respuesta}</li>)}
            </ul>
        </div>
}

export default Question;