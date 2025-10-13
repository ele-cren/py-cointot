'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { cn } from '@/src/lib/utils'
import { Star } from 'lucide-react'
import * as React from 'react'

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role?: string
  company?: string
  testimonial: string
  rating?: number
  image?: string
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  (
    {
      name,
      role,
      company,
      testimonial,
      rating = 5,
      image,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'border-primary/10 bg-background dark:hover:shadow-primary/5 relative overflow-hidden rounded-2xl border p-6 transition-all hover:shadow-lg md:p-8',
          className
        )}
        {...props}
      >
        <div className="text-muted-foreground/20 absolute top-6 right-6 font-serif text-6xl">
          {'"'}
        </div>

        <div className="flex h-full flex-col justify-between gap-4">
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={cn(
                    index < rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-muted text-muted'
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-muted-foreground text-base text-pretty">
            {testimonial}
          </p>

          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center gap-4">
              {image && (
                <Avatar>
                  <AvatarImage
                    src={image}
                    alt={name}
                    height={48}
                    width={48}
                    className="object-cover"
                  />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="text-foreground font-semibold">{name}</h3>
                <p className="text-muted-foreground text-sm">
                  {role}
                  {company && ` @ ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = 'Testimonial'

export { Testimonial }
