import { ContentGrid } from "./content-grid";
import { Filter } from "./filter/filter";

export interface DataGridProps{
  columns?: any[],
  content?:  string
}

export function Grid({
  columns,
  content
} 
  : DataGridProps) {
  return (
    <div className="flex flex-col">
      <Filter columns={columns}/>
      <ContentGrid content={content}/>  
    </div>
  )
}