'use client'

import Image from "next/image"
import { useState } from "react"

export default function Slider({ imageUrls }) {
    console.log(imageUrls.length)
    const [imageIndex, setImageIndex] = useState(0)

    console.log(imageIndex)

    function showPrevImage() {
        setImageIndex(index => {
            if (index == 0) return imageUrls.length - 1
            else return index - 1
        })
    }

    function showNextImage() {
        setImageIndex(index => {
            return (index + 1) % imageUrls.length
        })
    }


    return (
        <div className="relative w-full h-full">
            <div className="flex w-full h-full overflow-hidden">
                {imageUrls.map((src, index) => (
                    <Image src={src}
                        key={index}
                        className="block object-cover w-full h-full transition-all duration-300 ease-in-out aspect-square md:aspect-video shrink-0 grow" 
                        style={{translate: `${-100 * imageIndex}%`}}
                        height={1200} width={1200}
                    />
                ))}
            </div>

            <button className="absolute top-0 bottom-0 left-0 p-5 font-bold text-white"
                onClick={showPrevImage}>
                <Image src="/icons/left-arrow.svg" width={30} height={30}/>
            </button>
            <button className="absolute top-0 bottom-0 right-0 p-5 font-bold text-white"
                onClick={showNextImage}>
                <Image src="/icons/right-arrow.svg" width={30} height={30}/>
            </button>
            <div className="absolute flex justify-center w-full gap-4 -translate-x-1/2 bottom-8 left-1/2">
                {imageUrls.map((_, index) => (
                    <button key={index} onClick={() => setImageIndex(index)} className="transition-all duration-100 ease-in-out hover:scale-125">
                        {index == imageIndex ? 
                            <Image src="/icons/selected-dot.svg" width={12} height={12}/> : 
                            <Image src="/icons/dot.svg" width={12} height={12} /> 
                        }
                    </button>
                ))}
            </div>
        </div>
    )
}