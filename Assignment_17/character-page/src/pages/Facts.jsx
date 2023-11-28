import { useParams } from "react-router-dom"

const factsList = [
    {
        id: '1',
        fact: "\"Fleabag\", the nickname of the central character, is also the nickname given to actress Phoebe Waller-Bridge by her family."
    },
    {
        id: '2',
        fact: "One of the distinctive features of \"Fleabag\" is the way the main character, also known as Fleabag, breaks the fourth wall by addressing the audience directly. This narrative technique allows viewers to gain insight into Fleabag's thoughts and emotions."
    },
    {
        id: '3',
        fact: "Throughout the series, the main character is referred to as \"Fleabag,\" but her real name is never revealed. This deliberate omission adds a layer of mystery and allows viewers to connect with the character without a formal introduction."
    },
    {
        id: '4',
        fact: 'Throughout the series, hints and flashbacks reveal the tragic backstory of Fleabag, including the loss of her best friend Boo. This adds depth to her character and explains some of the emotional struggles she faces.'
    },
    {
        id: '5',
        fact: 'Fleabag often uses humor as a coping mechanism, deflecting serious situations with wit and sarcasm. This adds layers to her character and highlights the show\'s ability to balance humor with moments of emotional depth.'
    }
]


const Facts = () => {

    const param = useParams()

    const selectedFact = factsList.find(fact => fact.id === param.factId)
    if(!selectedFact){
        return <div>Fact not found</div>
    }

    return(
        <div>
            <h1>{selectedFact.fact}</h1>
        </div>
    )
}

export default Facts