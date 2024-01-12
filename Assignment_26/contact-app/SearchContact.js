import { useState } from "react"
import {TextInput, StyleSheet, View, Button, Text} from "react-native"
import ContactsList from "./ContactsList"

const SearchContact = ({contacts}) => {
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState(contacts)
    const handleChange = (value) => {
        setSearch(value)
    }

    const searchFilter = () => {
        if(search === ""){
            setSearchResults(contacts)
        } else{
            const results = contacts.filter(contact => {
                const nameMatch = 
                contact.name.toLowerCase().includes(search.toLowerCase())
                const phoneMarch = 
                contact.phone.includes(search)
                return nameMatch || phoneMarch
            })
            setSearchResults(results)
        }
    }

    return(
        <View>
            <TextInput 
                value={search}
                style={styles.input}
                onChangeText={handleChange}
            />
            <Button title="Search" onPress={searchFilter}/>
            <ContactsList contacts={searchResults}/>
        </View>
    )
}

export default SearchContact

const styles = StyleSheet.create({
    input: {
      padding: 5,
      borderColor: "black",
      borderWidth: 1,
      marginLeft: 70,
      marginRight: 70
    },
  });