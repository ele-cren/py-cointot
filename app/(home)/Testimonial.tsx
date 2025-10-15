import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { cn } from '@/src/lib/utils'
import { QuoteIcon, StarIcon } from 'lucide-react'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-px">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          size={16}
          className={cn({
            'fill-yellow-400 text-yellow-400': index < rating,
            'fill-muted text-muted': index >= rating,
          })}
        />
      ))}
    </div>
  )
}

type TestimonialProps = {
  name: string
  rating: number
  image: string
  testimonial: string
}

export function Testimonial({
  name,
  rating,
  image,
  testimonial,
}: TestimonialProps) {
  return (
    <div className="bg-card flex flex-col justify-between gap-4 rounded-md border p-4 shadow-sm transition-shadow hover:shadow-lg">
      <div className="flex items-center justify-between">
        <StarRating rating={rating} />
        <QuoteIcon className="text-muted-foreground/50" />
      </div>
      <p className="text-muted-foreground text-sm text-pretty">{testimonial}</p>
      <div className="flex items-center gap-2">
        <Avatar className="size-8">
          <AvatarImage src={image} alt={name} className="object-cover" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <p className="text-foreground text-sm font-semibold">{name}</p>
      </div>
    </div>
  )
}
