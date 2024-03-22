import { useEffect, useState } from "react";
import ScheduleNav from "./schedule-nav";
import { getEventSchedule } from "../api/driveCrawler";

export default function ScheduleNavWrapper() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await getEventSchedule()
            setData(response.data)
        }
        fetchData()
    }, [])

    console.log(data)

    if (data) {
        return (
            <ScheduleNav sheetdata={data} />
        )
    } else {
        return (
            <div className="flex justify-center py-10">
                <h1 className="text-xl">Carregando Cronograma...</h1>
            </div>
        )
    }
}