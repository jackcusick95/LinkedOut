import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions/post_actions';
import { Link } from 'react-router-dom';


class SearchBarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchChar: "",
        }
        
        this.handleSearchInput = this.handleSearchInput.bind(this); 
        this.leave = this.leave.bind(this); 
    }

    componentDidMount() {
        this.props.fetchAllPosts(); 
    }

    handleSearchInput(e) {
        e.preventDefault(); 
        this.setState({ searchChar: e.target.value});
    }

    leave() {
        document.getElementById('search-inp').value = null;
        this.setState({ searchChar: "" });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="search-container">
                    <input
                        className="search-input"
                        id="search-inp"
                        type="text"
                        placeholder="🔍  Search for a user..." 
                        onChange={this.handleSearchInput}
                    />
                </div >
                <div>
                    {
                        this.state.searchChar.length > 0 ? 
                            <ul className="search-list-dropdown" onMouseLeave={this.leave}>
                                    {[...this.props.usersArr].filter(user => user.fname.toLowerCase().includes(this.state.searchChar.toLowerCase())).map((filteredUser) => {
                                        console.log(filteredUser);
                                        return (
                                            <div key={filteredUser.id}>
                                                <Link to={`/userprofile/${filteredUser.id}`}>
                                                    <li className="search-item" key={filteredUser.id}>
                                                        <p className="search-name">{filteredUser.fname} {filteredUser.lname} </p>
                                                        <p className="search-break">.</p>
                                                        <p className="search-title"> {filteredUser.title}</p>
                                                    </li>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </ul>
                        : <div></div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        currentuser: state.entities.users[state.session.id],
        usersArr: Object.values(state.entities.users),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
    };
};

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBarItem);

export default SearchBar;