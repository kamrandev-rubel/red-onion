import { useEffect, useState } from "react"

const useFoodData = () => {
    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllFoods(data))
    }, [])
    return [allFoods, setAllFoods];
}

export default useFoodData;