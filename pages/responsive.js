import { useRouter } from "next/router"
import Link from "next/link";
import Image from "next/image";

const Responsive = () => {
    const router = useRouter();
    const image = Object.keys(router.query);
    return (
        <div className="p-2">

            <section>
                <h2 className='text-4xl font-extrabold dark:text-gray-900'> Image Component with Layout Responsive </h2>
                <p className='my-4 text-lg text-gray-500'>
                    This uses the sizes property to configure how next/image automatically generates an image source set.
                </p>
                <Image
                    alt={image}
                    src={`https://nextimageproject365120311-dev.s3.amazonaws.com/public/${image}`}
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