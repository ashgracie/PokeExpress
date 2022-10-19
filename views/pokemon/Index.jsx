const React = require('react');
class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return(
            <div>
                <h1>Pokemon Index Page</h1>
                <nav>
                    <a href="/pokemon/new">Create a New Pokemon</a>
                </nav>
                <ul>
                    {
                        pokemon.map((pokemon) => {
                            const {name, imageUrl, description, hasBeenCaught} = pokemon
                            return (
                                <li key={pokemon._id}>
                                    <a href={`/pokemon/${pokemon._id}`}>
                                    {name}</a> is {description}<br/>
                                    <img src={`${imageUrl}`} style={{height:"40px"}}></img>
                                     <br/>
                                    {
                                        hasBeenCaught? 
                                        'It\'s caught':
                                        'It\'s wild'
                                    }
    
                                    <br/>
                                    <form method="POST" action={`/pokemon/${pokemon._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index