import React from 'react';
import Like from './Like';

const Table = props => {
    const { movies, onDelete, onLike, onSort } = props;
    return(
        <table className="table table-dark">
                    <thead>
                        <tr>
                          <th 
                          className="active"
                          onClick={() => onSort("title")} 
                          scope="col"
                          style={{cursor: "pointer"}}
                          >TITLE
                          </th>
                          
                          <th scope="col">GENRE</th>
                          
                          <th 
                          className="active"
                          onClick={() => onSort("director")} 
                          scope="col"
                          style={{cursor: "pointer"}}
                          >DIRECTOR
                          </th>
                          
                          <th scope="col">RATE</th>
                          
                          <th></th>
                          <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {movies.map(movie => (
                            <tr key={movie._id}>
                                <td className="titleStyle">{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.director}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like 
                                    liked={movie.liked}
                                    onClick={() => onLike(movie)}
                                    />
                                </td>
                                <td>
                                  <button 
                                  onClick={() => onDelete(movie)} 
                                  className="btn btn-primary btn-sm"
                                  ><i className="fas fa-check"></i></button>
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
    )
};

export default Table