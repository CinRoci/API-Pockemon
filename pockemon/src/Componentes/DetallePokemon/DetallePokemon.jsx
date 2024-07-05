const DetallePokemon = (props) => {
    return(
        <div>
            <h2> Nombre: {props.infoPokemon.name} </h2>
            <p> Altura: {props.infoPokemon.height} </p>
            <p> Anchura: {props.infoPokemon.weight} </p>
            <img src={props.infoPokemon.sprites.other.dream_world.front_default} />
        </div>
    );
}

export default DetallePokemon;