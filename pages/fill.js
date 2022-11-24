import Image from "next/image";
import { useState, useEffect } from 'react'
import { Storage } from "aws-amplify"

const Fill = () => {
    const [imageUrl, getImageUrl] = useState([])

    const getUploadedImage = async () => {
        const file = await Storage.get("pexels-marina-leonova-9465701.png", {
            level: "public"
        });
        console.log(file)
        getImageUrl(file)
    }

    useEffect(() => {
        getUploadedImage()
    }, [])
    return (
        <div className="p-2">

            <section>
                <h2 className='text-4xl font-extrabold dark:text-gray-900'>Image Component With Layout Fill  </h2>
                <p className='my-4 text-lg text-gray-500'> This is a boolean that causes the image to fill the parent element instead of setting width and height.</p>

                <code className='text-orange-500'>object-fit: "cover"</code>
                <div className="relative w-[300px] h-[500px] border-2 border-red-400 my-8 overflow-hidden">

                    <Image
                        alt="Layout Fill"
                        src={imageUrl}
                        fill
                        // sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <code className='text-orange-500'>object-fit: "contain"</code>
                <div className="relative w-[300px] h-[500px] border-2 border-red-400 my-8">

                    <Image
                        alt="Layout Fill"
                        src={imageUrl}
                        fill
                        // sizes="100vw"
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                </div>
                <code className='text-orange-500'>object-fit: "none"</code>
                <div className="relative w-[300px] h-[500px] border-2 border-red-400 my-8">

                    <Image
                        alt="Layout Fill"
                        src={imageUrl}
                        quality={100}
                        fill
                        style={{
                            objectFit: 'none',
                        }}
                    />
                </div>
            </section>
        </div>
    )
}

export default Fill