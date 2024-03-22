import { getEventSchedule } from '../api/driveCrawler'
import { useEffect, useState } from 'react'

export default function GetSheets() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await getEventSchedule()
            setData(response.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Sheets data</h1>
            <ul>
                {data && data.map((item, index) => (
                    <li key={index}>{item.join(' - ')}</li>
                ))}
            </ul>
        </div>
    )
}