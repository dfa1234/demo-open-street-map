import {useEffect, useState} from 'react';

export const TASK_URL = 'https://api.json-generator.com/templates/IbLf8dNF1tHX/data';
export const DRIVERS_URL = 'https://api.json-generator.com/templates/dvkDln8It8XR/data';

const TOKEN = 'vju7rl0ybfnlwkn7tal9ywlimqo4rxvcs6i1kjp9';

export const useDataApi = <T>(url: string) => {

    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetch(url + '?access_token=' + TOKEN);
                const resultJson = await result.json();
                setData(resultJson);

            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return [data, isLoading, isError] as [T, boolean, boolean];
};
