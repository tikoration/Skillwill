import { useRef } from "react"
import { languageOptions, useLanguageContext } from "../contexts/LanguageContext"

const TaskList = ({onFormSubmit, name, contributor, deadline, isCompleted}) => {

    const taskRef = useRef()
    const deadlineRef = useRef()
    const contributorRef = useRef()
    const {language} = useLanguageContext()
    const languageObj = languageOptions[language]

    const onSubmit = (e) => {
        e.preventDefault()
        if(taskRef.current && contributorRef.current && deadlineRef.current){
            onFormSubmit(taskRef.current.value, contributorRef.current.value, deadlineRef.current.value, isCompleted = false)
        }
    }
   
    return( 
        <>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder={languageObj.task}
                    id="form-input"
                    ref={taskRef}
                    defaultValue={name}
                /> 
                <input 
                    type="text"
                    placeholder={languageObj.contributor}
                    ref={contributorRef}
                    defaultValue={contributor}
                /> 
                  <input 
                    type="text"
                    placeholder={languageObj.deadline}
                    ref={deadlineRef}
                    defaultValue={deadline}
                /> 
                <button className="task-btn" type="submit">{languageObj.addTask}</button>
            </form>
        </>
    )
}

export default TaskList