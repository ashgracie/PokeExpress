const React = require('react')

class Edit extends React.Component {
    render(){
        const {name, _id, imageUrl, description, hasBeenCaught} = this.props.pokemon
        return (
            <>
                <h1>Edit This Pokemon</h1>
                <nav>
                    <a href="/pokemon"> Go Back To Pokemons Home</a>
                </nav>
                <form method="POST" action={`/pokemon/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    ImageUrl: <input type="text" name="imageUrl" defaultValue={imageUrl}></input><br />
                    Description: <input type="text" name="description" defaultValue={description}></input><br />
                    Has Been Caught: <input type="checkbox" name="hasBeenCaught" defaultChecked={hasBeenCaught}/> <br />
                    <input type="submit" value="Edit Poke" />
                </form>
            </>
        )
    }
}

module.exports = Edit