import { useEffect, useState, useContext} from "react";
import { ThemeContext } from '../Contextor'

export function useFetch(url) {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [isLoading,setLoading] = useState(true);

    useEffect(() => {
        if (!url) {return}
        setLoading(true);
        // async function fetchData() {
        //     try {
        //         setLoading(true);
        //         const response = await fetch(url);
        //         const data = await response.json();
        //         console.log(data);
        //         setData(data);
        //     } catch (error) {
        //         console.log(error);
        //         setError(true);
        //     } finally {
        //         setLoading(false);
        //     }
        // }
        // fetchData();
        function fetchData() {
            fetch(url)
            .then((res) => {
                res.json().then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
                });
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
        }
        if (!document.startViewTransition) {
            fetchData();
        }        
        // const direction = determineBackwardsOrForwards();
        document.startViewTransition(function (){
            fetchData();
        });
    }, []);
    return { isLoading, data, error }
}

export function useTheme() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    return { toggleTheme, theme }
}