import React from 'react';
import _ from 'lodash';
import { getMovies } from '../services/MovieService';
import { getGenres } from '../services/GenreService';
import { paginate } from '../reusable/paginate';
import Pagination from './Pagination';
import Genres from './Genres';
import Table from './Table';

class MoviesTable extends React.Component {
    state = {
        movies: [],
        pageSize: 5,
        currentPage: 1,
        genres: [],
        selectedGenre: " ",
        sortColumn: {
            path: 'title',
            order: 'asc'
        }

    };

componentDidMount() {
    const genres = [{_id: '', name: "All"}, ...getGenres()]
    this.setState({movies: getMovies(), genres: genres});
}

handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
};

handleLike = (movie) => {
    const movies = [...this.state.movies]; 
    const index = movies.indexOf(movie); 
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});

};

handlePageChange = page => {
    this.setState({ currentPage: page });

};

handleGenres = genre => {
    this.setState({selectedGenre: genre, currentPage: 1});
};

handleSort = path => {
    const sortColumn = {...this.state.sortColumn};
    if (sortColumn.path === path)
        sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    else {
        sortColumn.path = path;
        sortColumn.order = 'asc';
    };

    this.setState({ sortColumn });
};


render() {

    const filtered = this.state.selectedGenre && this.state.selectedGenre._id ? this.state.movies.filter(m => m.genre._id === this.state.selectedGenre._id) : this.state.movies;

    const sorted = _.orderBy(filtered, [this.state.sortColumn.path], [this.state.sortColumn.order])
    const movies = paginate(sorted, this.state.currentPage, this.state.pageSize);

    
    return(

        <React.Fragment>

            <div id="header">
                <Genres 
                    onGenres={this.handleGenres}
                    genres={this.state.genres}
                    selectedGenre={this.state.selectedGenre}
                    />
            </div>

            <Table 
                movies={movies}
                onDelete={this.handleDelete}
                onLike={this.handleLike}
                onSort={this.handleSort}
                />     

            <Pagination 
                itemsCount={filtered.length}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
                />

        </React.Fragment>

        )   

    };
};

export default MoviesTable
