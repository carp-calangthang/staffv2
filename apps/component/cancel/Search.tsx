import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, View, TextInput } from "react-native";

import SearchStyle from "./stylesheet/SearchStyle";

const SearchBar = () => {
    return (
        <View style={ SearchStyle.container }>
            <TextInput 
                style={ SearchStyle.searchInput }
                placeholder="Tìm kiếm" 
            />
            <TouchableOpacity style={ SearchStyle.searchButton }>
                <Icon name="search" size={20} />
            </TouchableOpacity>
        </View>
    )
};

export default SearchBar;