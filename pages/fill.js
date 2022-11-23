import { useRouter } from "next/router"
import Link from "next/link";
import Image from "next/image";

const Fill = () => {
    const router = useRouter();
    const image = Object.keys(router.query);
    return (
        <div className="p-2">

            <section>
                <h2 className='text-4xl font-extrabold dark:text-gray-900'>Image Component With Layout Fill  </h2>
                <p className='my-4 text-lg text-gray-500'> This is a boolean that causes the image to fill the parent element instead of setting width and height.</p>

                <code className='text-orange-500'>object-fit: "cover"</code>
                <div className="relative w-[300px] h-[500px] border-2 border-red-400 my-8 overflow-hidden">

                    <Image
                        alt={image}
                        src={`https://nextimageproject365120311-dev.s3.amazonaws.com/public/${image}`}
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
                        alt={image}
                        src={`https://nextimageproject365120311-dev.s3.amazonaws.com/public/${image}`}
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
                        alt={image}
                        src={`https://nextimageproject365120311-dev.s3.amazonaws.com/public/${image}`}
                        quality={100}
                        fill
                        // sizes="100vw"
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