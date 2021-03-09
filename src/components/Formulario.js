import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({search, saveSearch, saveConsult}) => {

    

    const  [error, saveError] = useState(false);

    // Extraer ciudad y pais
    const { city, country } = search;

    // Funcion que coloca los elementos en el state
    const handleChange = e => {
        // Actualizar el state
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if(city.trim() === '' || country.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        saveConsult(true);
    }

    return (
        <form
            onSubmit = {handleSubmit}
        >
            {error ? <Error message="Ambos campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input
                    type = "text"
                    name = "city"
                    id = "city"
                    value = {city}
                    onChange = {handleChange}
                />
                <label htmlFor="city">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name = "country"
                    id = "country"
                    value = {country}
                    onChange = {handleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">País: </label>
            </div>
            <div className="input-field col s12">
                <input
                    type = "submit"
                    value = "Buscar Clima"
                    className = "waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

Formulario.propTypes = {
    search: PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    saveConsult: PropTypes.func.isRequired
}
 
export default Formulario;