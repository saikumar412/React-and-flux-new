"use strict";

var React = require('react');

var AuthorsList = React.createClass({
    
    render: function () {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        
        return (
            <div>
               
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

<<<<<<< HEAD
module.exports = AuthorsList;
=======
module.exports = AuthorsList;
>>>>>>> fbb901413c392cfe82a2735ecfcf79ef8d542a4a
