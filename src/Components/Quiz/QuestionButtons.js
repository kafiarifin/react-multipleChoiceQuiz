import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import {Row,Col} from 'react-bootstrap';
import './Question.css'



class questionbuttons extends Component {




    buttons = (buttonType) => {
        return (
            <div className={"QuestionButtons"}>
                <Row>
                    <Col md={5} xs={5}>
                        {
                            this.props.index !== 0 ?
                                <div className={"decrementIndex"}>
                                    <Button onClick={this.props.decrementIndex}
                                            size={buttonType}
                                            labelPosition='left'
                                            icon='left chevron'
                                            content='Forrige'
                                            className={"leftButton"}/>

                                </div> : null
                        }
                    </Col>

                    <Col md={2} xs={2}>
                        <div className={"progressIndex"}>
                            <p>{this.props.index+1}/{this.props.questions.length}</p>
                        </div>
                    </Col>

                    <Col md={5} xs={5}>
                        {
                            this.props.index < this.props.questions.length-1 ?
                                <div className={"incrementIndex"}>
                                    <Button onClick={this.props.incrementIndex}
                                            size={buttonType}
                                            labelPosition='right'
                                            icon='right chevron'
                                            content='Næste'
                                            className="rightButton"/>

                                </div> : null
                        }
                        {
                            this.props.index === this.props.questions.length-1 ?
                                <div className={"incrementIndex"}>
                                    <Button positive
                                            onClick={this.props.endQuiz}
                                            size={buttonType}
                                            labelPosition='right'
                                            icon='check'
                                            content='Afslut'
                                            className="rightButton"

                                    />


                                </div> : null
                        }
                    </Col>

                </Row>
            </div>
        )
    }


    render() {
        return (
            <div>
                <div className={"hide-desktop"}>
                    {this.buttons("mini")}
                </div>
                <div className={"hide-mobile"}>
                    {this.buttons("large")}
                </div>
            </div>
        )
    }
}



export default questionbuttons;