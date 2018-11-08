
import React, { Component } from 'react'
import './Question.css';
import QuestionHeader from './QuestionHeader';
import { Divider,Segment } from 'semantic-ui-react';
import QuestionForm from './QuestionForm';
import QuestionButtons from './QuestionButtons';
import {Col} from 'react-bootstrap';
import Results from './QuestionResults'

class question extends Component {
    
   state = {
       index: 0,
       isActive: true,
       windowWidth: null,
       answers: [],

       quiz: {
           title: "Matematik test",
           questions: [
               {
                   question: "Hvad er 2+2?",
                   questionPossibilities: [
                       "1", "4", "10", "15"
                   ],
                   answer: 1
               },
               {
                   question: "Hvad er 10+5?",
                   questionPossibilities: [
                       "1", "4", "3", "15"
                   ],
                   answer: 3
               },
               {
                   question: "Hvad er 120/10",
                   questionPossibilities: [
                       "10", "1", "12", "15"
                   ],
                   answer: 2
               },
           ]

       }
   }


    endQuiz = () => {
       this.setState({isActive: false})
        console.log("ENDER QUIZ")
    }

   incrementIndex = () => {
       this.setState({index: this.state.index + 1})
       console.log("increment")
   }


    decrementIndex = () => {
        this.setState({index: this.state.index - 1})
        console.log("decrement")
    }

    changeAnswers = (value,index) => {
       let tempArray = [...this.state.answers];
       tempArray[index] = value;
       this.setState({answers: tempArray});
    }

    wrongAnswers = () => {
        const wrongAnswers = this.state.quiz.questions.filter((item,index) => {
           return item.answer !== this.state.answers[index] || item.answer === null;
       })
        return wrongAnswers;
    }




   

    render() {
        return (
            <div className="Question">
                <Col md={10} mdOffset={1} xs={12} >
                    <Segment>
                        {
                            this.state.isActive ?
                            <div>
                                <QuestionHeader header={this.state.quiz.title}/>
                                < Divider />
                                < QuestionForm questions={this.state.quiz.questions}
                                index={this.state.index}
                                answers={this.state.answers}
                                changeAnswers={this.changeAnswers}
                                />
                                <Divider/>
                                <QuestionButtons index={this.state.index}
                                incrementIndex={this.incrementIndex}
                                decrementIndex={this.decrementIndex}
                                windowWidth={this.state.windowWidth}
                                questions={this.state.quiz.questions}
                                endQuiz={this.endQuiz}
                                />
                            </div> : null
                        }

                        {
                            this.state.isActive === false ?
                                <div>
                                    <Results wrongAnswers={this.wrongAnswers}
                                             questions={this.state.quiz.questions}
                                    />
                                </div> : null
                        }
                    </Segment>
                </Col>

            </div>
        )
    }
}

export default question;
