import React from "react"
import './search.css'

function ListResults(props) {
    const showResults = () => {
        return (
            <div className="result-box scroll inner-box-color" id="scrolling">
                <br></br>
                {props.query.map((result, i) => {
                    return (
                        <div key={i}>
                            <p className="link">{result.displayLink}</p>
                            <b><a className="text-box title" href={result.link}>{result.title}</a></b>
                            <p>{result.snippet} </p>
                            <br></br>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            {showResults()}
        </div>
    )
}

export default ListResults