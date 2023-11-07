import TheHungerGames from "../assets/TheHungerGames.jpg"
import ToKillAMockingbird from "../assets/ToKillAMockingbird.jpg"
import PrideAndPrejudice from "../assets/PrideAndPrejudice.jpg"

const data = [
    {
        id: 1, 
        title: "The Hunger Games", 
        image: TheHungerGames,
        description: 
        "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with hmother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.", 
        characters: ["Katniss Everdeen", "Peeta Mellark", "Cato (Hunger Games)", "Primrose Everdeen", "Gale Hawthorne", "Effie Trinket", "Haymitch Abernathy", "Cinna", "President Coriolanus Snow", "Rue", "Flavius"]
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        image: ToKillAMockingbird,
        description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. \"To Kill A Mockingbird\" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, \"To Kill A Mockingbird\" takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
        characters: ['Scout Finch', 'Atticus Finch (The Sanibel Sunset Detective Returns)', 'Jem Finch', 'Arthur Radley', 'Mayella Ewell', 'Aunt Alexandra', 'Bob Ewell', 'Calpurnia (housekeeper)', 'Tom Robinson', 'Miss Maudie Atkinson', 'Judge John Taylor','Dill Harris', 'Heck Tate', 'Stephanie Crawford']
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        image: PrideAndPrejudice,
        description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work \"her own darling child\" and its vivacious heroine, Elizabeth Bennet, \"as delightful a creature as ever appeared in print.\" The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
        characters: ['Mr. Bennet', 'Mrs. Bennet', 'Jane Bennet', 'Mary Bennet', 'Kitty Bennet', 'Lydia Bennet', 'Caroline Bingley', 'Fitzwilliam Darcy', 'Georgiana Darcy', 'Lady Catherine de Bourgh', 'Mr. Gardiner', 'Mrs. Gardiner', 'Charlotte Lucas', 'Charles Bingley', 'George Wickham', 'Mr. William Collins', 'Elizabeth Bennet', 'Mr. Bennet', 'Mrs. Bennet', 'Jane Bennet', 'Mary Bennet', 'Kitty Bennet', 'Lydia Bennet', 'Caroline Bingley', 'Fitzwilliam Darcy', 'Georgiana Darcy']
    },
    {
        id: 4, 
        title: "The Hunger Games", 
        image: TheHungerGames,
        description: 
        "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with hmother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.", 
        characters: ["Katniss Everdeen", "Peeta Mellark", "Cato (Hunger Games)", "Primrose Everdeen", "Gale Hawthorne", "Effie Trinket", "Haymitch Abernathy", "Cinna", "President Coriolanus Snow", "Rue", "Flavius"]
    },
    {
        id: 5,
        title: "To Kill a Mockingbird",
        image: ToKillAMockingbird,
        description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. \"To Kill A Mockingbird\" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, \"To Kill A Mockingbird\" takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
        characters: ['Scout Finch', 'Atticus Finch (The Sanibel Sunset Detective Returns)', 'Jem Finch', 'Arthur Radley', 'Mayella Ewell', 'Aunt Alexandra', 'Bob Ewell', 'Calpurnia (housekeeper)', 'Tom Robinson', 'Miss Maudie Atkinson', 'Judge John Taylor','Dill Harris', 'Heck Tate', 'Stephanie Crawford']
    },
    {
        id: 6,
        title: "Pride and Prejudice",
        image: PrideAndPrejudice,
        description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work \"her own darling child\" and its vivacious heroine, Elizabeth Bennet, \"as delightful a creature as ever appeared in print.\" The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
        characters: ['Mr. Bennet', 'Mrs. Bennet', 'Jane Bennet', 'Mary Bennet', 'Kitty Bennet', 'Lydia Bennet', 'Caroline Bingley', 'Fitzwilliam Darcy', 'Georgiana Darcy', 'Lady Catherine de Bourgh', 'Mr. Gardiner', 'Mrs. Gardiner', 'Charlotte Lucas', 'Charles Bingley', 'George Wickham', 'Mr. William Collins', 'Elizabeth Bennet', 'Mr. Bennet', 'Mrs. Bennet', 'Jane Bennet', 'Mary Bennet', 'Kitty Bennet', 'Lydia Bennet', 'Caroline Bingley', 'Fitzwilliam Darcy', 'Georgiana Darcy']
        
    }
]

export default data