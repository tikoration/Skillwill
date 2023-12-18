import { createContext, useContext, useMemo, useState } from "react";
import GeoFlag from "../assets/geo.png"
import EngFlag from "../assets/en.png"

export const languageOptions = {
    georgian: {
        mainPage: "მთავარი გვერდი",
        createPage: "დავალების დამატება",
        completedTasks: "შესრულებული დავალებები",
        task: "დავალება",
        contributor: "შემსრულებელი",
        deadline: "დასრულების ვადა",
        edit: "რედაქტირება",
        done: "დასრულება",
        delete: "წაშლა",
        addTask: "დამატება",
        flag: EngFlag
    },
    english: {
        mainPage: "Main Page",
        createPage: "Create Page",
        completedTasks: "Completed Tasks",
        task: "Task",
        contributor: "Contributor",
        deadline: "Deadline",
        edit: "Edit",
        done: "Done",
        delete: "Delete",
        addTask: "Add Task",
        flag: GeoFlag
    }
}

const LanguageContext = createContext(null)

const LanguageContextProvider = ({children}) => {
    const [georgian, setGeorgian] = useState(true)

    const contextValue = useMemo(() => ({
        language: georgian ? "georgian" : "english",
        toggleLanguage: () => setGeorgian(prev => !prev)
    }))

    return <LanguageContext.Provider value={contextValue}>
        {children}
        </LanguageContext.Provider>
}

export const useLanguageContext = () => {
    const contextValue = useContext(LanguageContext)
    if(!contextValue) throw new Error ('Your component is not inside LanguageContextProvider')
    
    return contextValue
}

export default LanguageContextProvider