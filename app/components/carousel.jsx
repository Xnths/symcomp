import fs from 'fs'
import path from 'path'
import Slider from './slider'

const publicDirectoryPath = path.join(process.cwd(), 'public', 'slider')
const fileNames = fs.readdirSync(publicDirectoryPath)
const filePaths = fileNames.map(fileName => (
    '/slider/' + fileName
))

export default function Carousel() {
    return (
        <div className="flex justify-center w-full bg-white">
            <div className='flex w-full max-w-[1200px]'>
                <Slider imageUrls={filePaths}/>
            </div>
        </div>
    )
}