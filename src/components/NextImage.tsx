import Image from 'next/image'

type Props = {
  src: string
  className?: string
  alt?: string
}

export const NextImage = ({ src, className, alt }: Props) => {
  return (
    <Image
      className={className}
      alt={alt || ''}
      src={src}
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      style={{ objectFit: 'cover' }}
      placeholder="blur"
      // For dynamic images, you must provide the blurDataURL property.
      // See https://nextjs.org/docs/pages/api-reference/components/image
      blurDataURL={src}
    />
  )
}
