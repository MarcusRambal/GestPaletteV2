 import './filter.css';

 export const Filter = ({ onFilterChange }: { onFilterChange: (filter: string) => void }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onFilterChange(e.target.value);
    }

    return (
        <div className="filter-container">
           <select name="filters" id="filters" onChange={handleChange}>
                <option value="">Filtro</option>
                <option value="Rellenas">Rellenas</option>
                <option value="Especial">Especial</option>
                <option value="Clásica">Clásica</option>
           </select>
        </div>
    )
    }

