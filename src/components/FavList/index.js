import DisplayArt from "../DisplayArt";

function FavList({favList}) {


    return (
        <div>
        {favList.map( (item) => {
            return <DisplayArt art={item}/>
        })}
        </div>
    );
}

export default FavList;