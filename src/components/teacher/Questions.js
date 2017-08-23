import React, { Component } from 'react';
import Question from './Question';

class Questions extends Component{

    constructor(){
        super();
        this.intervalStartQuestionId = null;
        this.intervalFinishQuestionId = null;
        this.state = {
            questions: [
                {
                    pregunta: "Cuál es el color amarillo ?",
                    respuestas: [
                        "amarillo",
                        "azul",
                        "rojo",
                        "verde"
                    ],
                    respuestaCorrecta: "amarillo"
                },
                {
                    pregunta: "Cuál es el número CINCO ?",
                    respuestas: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    respuestaCorrecta: "5"
                },
                {
                    pregunta: "De qué color es el cabello de la profe ?",
                    respuestas: [
                        "azul",
                        "verde",
                        "amarillo",
                        "café"
                    ],
                    respuestaCorrecta: "café"
                },
                {
                    pregunta: "Cuántos dedos tiene la mano derecha ?",
                    respuestas: [
                        "1",
                        "3",
                        "5",
                        "7"
                    ],
                    respuestaCorrecta: "5"
                },
                {
                    pregunta: "2+2",
                    respuestas: [
                        "1",
                        "6",
                        "9",
                        "4"
                    ],
                    respuestaCorrecta: "4"
                }

            ],
            currentQuestion: 0,
            questionFinished: false,
            questionStarted: false,
            finishCounter: 10,
            startCounter: 3
        }
    }

    nextQuestion = () => {
        this.setState({
            questionStarted: false,
            questionFinished: false,
            currentQuestion: this.state.currentQuestion + 1
        });

        this.startQuestionWithInterval();
    }

    startQuestion = () => {
        const { startCounter } = this.state;

        if (startCounter <= 0) {
            this.setState({ questionStarted: true, startCounter: 3 });
            clearInterval(this.intervalStartQuestionId);
            this.intervalFinishQuestionId = setInterval(this.finishQuestion, 1000);
        } else {
            this.setState({ startCounter: startCounter - 1 });
        }
    }

    finishQuestion = () => {
        const { finishCounter } = this.state;

        if (finishCounter <= 0) {
            this.setState({ questionFinished: true, finishCounter: 10});
            clearInterval(this.intervalFinishQuestionId);
        } else {
            this.setState({ finishCounter: finishCounter - 1 });
        }
    }

    startQuestionWithInterval() {
        this.intervalStartQuestionId = setInterval(this.startQuestion, 1000);
    }

    componentDidMount() {
        this.startQuestionWithInterval();
    }

    render(){
        const { questions, startCounter, questionFinished, finishCounter, questionStarted, currentQuestion } = this.state;

        return(
            questionStarted
            ?
            <div>
                <span>{finishCounter}</span>
                <Question isFinished={questionFinished} questions={questions[currentQuestion]} nextQuestion={this.nextQuestion}/>
            </div>
            :
            <span>{startCounter}</span>
        );
    }

}

export default Questions;