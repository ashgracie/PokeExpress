const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create A New Pokemon</h1>
            <nav>
                <a href="/pokemon">Got Back To Pokemon Home Page</a>
            </nav>
            <form method="POST" action="/pokemon">
                Name: <input type="text" name="name" placeholder='Name of Pokemon Here'></input><br/>
                Image: <input type="text" name="imageUrl" placeholder='Image of Pokemon Here'></input><br/>
                Description: <input type="text" name="description" placeholder='Description of Pokemon Here'></input><br/>
                Has Been Caught: <input type="checkbox" name="hasBeenCaught"></input><br/>
                <input type="submit" value="Submit Pokemon"></input>
            </form>
            </>
        )
    }
}

module.exports = New