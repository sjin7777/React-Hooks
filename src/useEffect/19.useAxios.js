import useAxios from './19.useAxios_detail';

function App() {
    const { loading, data, error, refetch } = useAxios({
        url: "https://yts.mx/api/v2/list_movies.json"
    });

    // console.log(`Loading: ${loading} \n data: ${JSON.stringify(data)} \n error: ${error}`);

    return (
        <div>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

export default App;