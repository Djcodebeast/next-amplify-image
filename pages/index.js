import { Storage } from 'aws-amplify';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [images, getImages] = useState([])

  const getUploadedImage = async () => {
    const file = await Storage.get("pexels-marina-leonova-9465701.png", {
      level: "public"
    });
    console.log(file)
    getImages(file)
  }
  const pageLinks = [
    {
      href: "/placeholder",
      title: "Blur-up placeholder"
    },
    {
      href: "/fill",
      title: "Fill dimensions of parent element"
    },
    {
      href: "/responsive",
      title: "Responsive"
    },
    {
      href: "/background",
      title: "Text on background image"
    },
  ]



  useEffect(() => {
    getUploadedImage()

  }, [])


  return (
    <div className="p-2">

      <section className="my-12">
        <h2 className='text-4xl font-extrabold dark:text-gray-900'>The Uploaded Image </h2>
        <p className='my-4 text-lg text-gray-500'> For the purpose of this demo, we will display just the first image in the s3 bucket</p>
        <div>
          <Image
            src={images}
            alt="Picture of the author"
            width={300}
            height={300}
            unoptimized={true}
          />
        </div>
      </section>

      <section className="my-12">
        <h2 className='text-4xl font-extrabold dark:text-gray-900'>Optimizing the Image  </h2>
        <p className='my-4 text-lg text-gray-500'> The image we retrieved from S3 was unoptimized. Here are the optimization features Nextjs offers: </p>
        <ul className="space-y-1 max-w-md list-none list-inside text-gray-500 dark:text-gray-400">
          {pageLinks.map((page, i) => (
            <li key={i}>
              <Link
                href={{
                  pathname: page.href,
                }}
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

    </div>
  )
}
