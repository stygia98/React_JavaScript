import { useParams } from "react-router-dom";

const Diary = () => {
    const params = useParams();

    return(
        <div>
            <h1>Diary {params.id} 번째</h1>
        </div>
    )
}

export default Diary;
