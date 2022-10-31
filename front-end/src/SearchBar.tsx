import React, { useState, useContext, createContext } from "react"
import './search.css'
import Form from 'react-bootstrap/Form';
import { HiOutlineSearch } from "react-icons/hi";
import ListResults from "./ListResults";

function SearchBar() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const search_url = `http://127.0.0.1:8000/search/`
    const [isValid, setIsValid] = useState(false)
    const [searched, setSearched] = useState(false)


    // Track input when text changes
    const onChangeHandler = (event) => {
        setQuery(event.target.value);
    };

    //if search icon is clicked, set values to original state to clear input. 
    const handleClick = async () => {
        setQuery('')
        setResults([])
        setIsValid(false)
    }

    //When form is submitted, get list of results from backend. 
    const handleSubmit = async (event) => {
        event.preventDefault();
        getResults()
    }

    // Makes a post request to the backend with specific query data to search with. Value of query is set to input value. 
    const getResults = async () => {
        const data = { 'q': query }
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(search_url, fetchConfig)
        console.log(response)
        if (response.ok) {
            const result_data = await response.json();
            console.log(result_data)
            let list = []
            for (let n in result_data['results']) {
                list.push(result_data['results'][n])
            }
            //if return length is greater than zero, then show results. Otherwise show - "0 results returned from your search"
            if (list.length == 0) {
                setIsValid(false)
            } else {
                setResults(list)
                setIsValid(true)
            }
        }
    }
    return (
        <>
            <div>
                <div className="text-center center">
                    <Form className="form ml-auto mr-auto input-area" onSubmit={handleSubmit}>
                        <HiOutlineSearch className="monocle" onClick={handleClick} style={{ fontSize: "6vh" }} />
                        <input
                            className="search-input"
                            type="text"
                            onChange={onChangeHandler}
                            value={query}
                            placeholder="Enter your search here... "
                        />
                        <button className="search-button text-white btn-text">Search</button>
                    </Form>
                </div>
            </div>
            <div className="imgbox">
                <div className="img-color">
                    <img className="center-fit" src={require('../img/bg-masthead.png')} />
                </div>
                <div className="flex-container text-on-image">
                    {isValid ? <ListResults query={results} /> : null}
                </div>
            </div>
        </>
    );
}


export default SearchBar;

