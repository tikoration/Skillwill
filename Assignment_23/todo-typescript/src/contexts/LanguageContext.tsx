import React, { createContext, useContext, useMemo, ReactNode, FC } from "react";
import GeoFlag from "../assets/geo.png";
import EngFlag from "../assets/en.png";

export interface LanguageOptions {
  mainPage: string;
  createPage: string;
  completedTasks: string;
  task: string;
  contributor: string;
  deadline: string;
  edit: string;
  done: string;
  delete: string;
  addTask: string;
  flag: string;
}

export const languageOptions: Record<string, LanguageOptions> = {
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
    flag: EngFlag,
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
    flag: GeoFlag,
  },
}

interface LanguageContextValue {
  language: string;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageContextProviderProps {
  children: ReactNode;
}

const LanguageContextProvider: FC<LanguageContextProviderProps> = ({ children }) => {
  const [georgian, setGeorgian] = React.useState(true);

  const contextValue = useMemo(
    () => ({
      language: georgian ? "georgian" : "english",
      toggleLanguage: () => setGeorgian((prev) => !prev),
    }),
    [georgian]
  )

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export const useLanguageContext = (): LanguageContextValue => {
  const contextValue = useContext(LanguageContext)
  if (!contextValue) throw new Error("Your component is not inside LanguageContextProvider")

  return contextValue
}

export default LanguageContextProvider
