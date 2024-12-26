
import NextIcon from "./nextIcon";


interface CatalogCardProps {
    name: string;
    onClick: (event: React.MouseEvent<HTMLDivElement>,name: string) => void;
}

const CatalogCard: React.FC<CatalogCardProps> = ({ name, onClick}) => {
     return (
        <div className ="w-full h-[70px] border border-gray-300 rounded-lg flex  justify-between items-center " onClick = {(event) => onClick(event, name)}>
                
                <div className = "ml-[20px] flex flex-col">
                    <h1 className = "text-[#080F30] font-bold text-base">
                        { name } 
                    </h1>
                    <h2 className = "text-gray-600 text-sm">
                         {name }
                    </h2>
                </div>
                <div className = "mr-[20px]">
                    <NextIcon/>
                </div>
                
        </div>

     );
};

export default CatalogCard;