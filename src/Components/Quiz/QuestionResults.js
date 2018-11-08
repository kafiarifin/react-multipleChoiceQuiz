import React from 'react';


const questionresults = (props) => {



    let quiz = props.questions;
    let wrongAnswers = props.wrongAnswers();
    let rightAnswers = quiz.length-wrongAnswers.length;




    return(

        <div className="QuestionResults">
            <div className="column">
               <div>
                    <p>Rigtige svar: {rightAnswers}/{quiz.length}</p>
               </div>
            </div>
        </div>
    )

}

export default questionresults;