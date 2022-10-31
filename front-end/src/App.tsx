import React from 'react';
import SearchBar from './SearchBar';
import 'regenerator-runtime/runtime'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListResults from './ListResults';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SearchBar />} />
                    <Route path="/results/" element={<ListResults />} />
                </Routes>
            </BrowserRouter >
        </>
    )
}

export default App