import { useRef } from "react"
import { languageSelector } from "../store/language/language.slice"
import { languageOptions } from "../data/languageData"
import { useSelector } from "react-redux"
import { themeSelector } from "../store/theme/theme.slice"
 

const TaskList = ({onFormSubmit, name, contributor, deadline, isCompleted}) => {

    const taskRef = useRef()
    const deadlineRef = useRef()
    const contributorRef = useRef()
    const {language} = useSelector(languageSelector)
    const languageObj = languageOptions[language]
    const {theme} = useSelector(themeSelector)
    const darkTheme = theme === "dark" ? {backgroundColor: "#5C4033", color: "white"} :{}

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
                <button style={darkTheme} className="task-btn" type="submit">{languageObj.addTask}</button>
            </form>
        </>
    )
}

export default TaskList