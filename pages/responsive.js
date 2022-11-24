import { useState, useEffect } from 'react'
import { Storage } from "aws-amplify"
import Image from "next/image";

const Responsive = () => {
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
                <h2 className='text-4xl font-extrabold dark:text-gray-900'> Image Component with Layout Responsive </h2>
                <p className='my-4 text-lg text-gray-500'>
                    This uses the sizes property to configure how next/image automatically generates an image source set.
                </p>
                <Image
                    alt="layout Responsive"
                    src={imageUrl}
                    width={700}
                    height={475}
                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </section>
        </div>
    )
}

export default Responsive