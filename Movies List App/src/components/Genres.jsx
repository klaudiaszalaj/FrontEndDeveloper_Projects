import React from 'react';

const Genres = props => {

        return(
            <ul className="list-group list-group-horizontal">
                 {props.genres.map(genre => <li 
                 style={{cursor: "pointer"}}
                 className={genre === props.selectedGenre ? "list-group-item active": "list-group-item"}
                 key={genre[props.valueProperty]}
                 onClick={() => props.onGenres(genre)}
                 >{genre[props.textProperty]}</li>)}
            </ul>
        
        )
}

Genres.defaultProps = {
    valueProperty: "_id",
    textProperty: "name"
}


export default Genres