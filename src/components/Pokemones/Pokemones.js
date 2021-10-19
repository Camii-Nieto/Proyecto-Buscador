import React, {useState} from 'react'
import useGet from '../../utils/useHttp'
import Spin from '../Spin';


const Pokemones = () => {
    const  [nombre, setNombre] = useState('');
    const  [pokeFiltrado, setPokeFiltrado] = useState([]);
    const [pokemones, error, loading] = useGet('https://pokeapi.co/api/v2/pokemon'); 

    const handlerInput = (event) => {
    setNombre(event.target.value)} 


    const filtrar = () => {
        const pokemon = pokemones.filter(pokemon => pokemon.name === nombre)
        setPokeFiltrado(pokemon);
    } 

    return (
        <>
            <div className="container">
                <div className="col-12 text-center my-3">
                     <h1>Pokemones</h1>
                </div>
                <div className="row justify-content-center">
                <div className="col-6">
                    <input type="text" className="form-control"  placeholder="Ingrese un pokemon" onChange={handlerInput} />
                <div className="d-grid gap-2">
                    <button className="btn btn-primary my-2"  onClick={filtrar}>Buscar pokemon</button>
                </div>
                </div>
                </div>
                <div className="row">
                    {error ? <h1 className="text-danger text-center mt-5">hubo un error! 😢</h1> :
                    [
                        (loading ? (
                            <Spin />
                            )
                            : (
                                [
                                    pokeFiltrado.length > 0 ? ( 
                                        pokeFiltrado.map(pokemon => (
                                            <div className="col-4 my-2" key={pokemon.id}>
                                            <div className="card">
                                            <img src={pokemon.image} className="card-img-top" alt="No hay imagen del poke"/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{pokemon.name}</h5>
                                            </div>
                                            </div>
                                            </div>
                                        ))
                                    ) : (
                                        pokemones.map(pokemon => (
                                            <div className="col-4 my-2" key={pokemon.id}>
                                            <div className="card">
                                            <img src={pokemon.image} className="card-img-top" alt="No hay imagen del poke"/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{pokemon.name}</h5>
                                            </div>
                                            </div>
                                            </div>
                                        ))
                                    )
                                ]
                            )
                        )
                    ]
                }
                </div>
            </div>
        </>
    )
}

export default Pokemones




