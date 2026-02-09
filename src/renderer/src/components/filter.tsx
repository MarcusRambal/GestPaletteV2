 import './filter.css';

 export const Filter = () => {


    return (
        <div className="filter-container">
           <select name="filters">
                <option value="opcion0">Filtrar por</option>
                <option value="opcion1">Hatsune Miku</option>
                <option value="opcion2">Kagamine Rin</option>
                <option value="opcion3">Kagamine Len</option>
                <option value="opcion4">Megurine Luka</option>
                <option value="opcion5">KAITO</option>
                <option value="opcion6">MEIKO</option>
                <option value="opcion7">Kasane Teto</option>
           </select>
        </div>
    )
    }

