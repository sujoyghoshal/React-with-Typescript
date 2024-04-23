import React, { useState, useEffect } from 'react';
interface DataItem {
    id: number;
    name: string;
    email:string;
}
const Api: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);
    useEffect(() => {
        fetch("https://apitest-6zir.onrender.com/api/show")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData: DataItem[]) => { 
                setData(jsonData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
        <h3>Create own api and fetching :</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: DataItem, index: number) => ( 
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default Api;
