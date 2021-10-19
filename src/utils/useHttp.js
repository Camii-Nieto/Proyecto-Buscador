import React, {useEffect, useState} from "react";
import axios from "axios";

const useGet = (url) => {
    const [pokemones, setPokemones] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const get = async () => {
            try {
                const {data} = await axios.get(url);
                const pokemons = data.results
                let i = 0;
                let pokeFinal = []
                while (i < pokemons.length) {
                    const {data} = await axios.get(pokemons[i].url);
                    const {name, sprites, id } = data;
                    const {front_default : image} = sprites;
                    const destructuredPoke = {
                        name,
                        image,
                        id
                    }
                    pokeFinal.push(destructuredPoke);
                i++
                }

                setPokemones(pokeFinal);
                setLoading(false);
            } catch (error) {
                console.error(error)
                setError(true);
            }
        } 

        get();
    },[url])
        return ( [pokemones, error, loading] );
}
 
export default useGet;




