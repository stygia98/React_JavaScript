import { useSearchParams } from "react-router-dom";

const New = () => {
    const [params, setParams] = useSearchParams();

    return(
        <div>
            <h1>New {params.get('name')}</h1>
            <h1>Age {params.get('age')}</h1>
        </div>
    )
}

export default New;
