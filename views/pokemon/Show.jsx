const React = require('react');

class Show extends React.Component {
   
    render(){
        const {name, imageUrl, description, hasBeenCaught, _id} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
        <>
            <h1> {capName} Show Page </h1>
            <nav>
                <a href="/pokemon">Back To Pokemon Home</a><br/>
                <a href={`/pokemon/${_id}/edit`}>{`Edit the ${capName}`}</a>
            </nav>
            <p>{capName} is {description} and {hasBeenCaught? 'it\'s caught': 'it\'s wild'}</p>
            <img src={`${imageUrl}`} style={{height:"100px"}}></img>
        </>
        )
   } 
}

module.exports = Show