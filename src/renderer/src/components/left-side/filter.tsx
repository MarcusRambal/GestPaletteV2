 import { Tag } from '../../../../types/tagType'
import './filter.css';

 interface FilterProps {
      onFilterChange: (filter: string) => void;
      tags: Tag[];
   }

 export const Filter = ({ onFilterChange, tags }: FilterProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onFilterChange(e.target.value);
    }

    return (
        <div className="filter-container">
           <select name="filters" id="filters" onChange={handleChange}>
                <option value="">Filtro</option>
                  {tags.map((tag) => (
                     <option key={tag.id} value={tag.name}>
                        {tag.name}
                     </option>
                  ))}
           </select>
        </div>
    )
    }

