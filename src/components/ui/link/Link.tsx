import React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { Link as RLink } from 'react-router-dom'
import { cn } from '../../../lib/utils'

const linkVarients = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: `
          hover:text-slate-100 
          md:text-[.9rem] 
          text[1.2rem] 
          font-[500]
        `,
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'p-0 m-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'icon',
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVarients> {
  asChild?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    return (
      <>
        <a
          className={cn(linkVarients({ variant, size, className }))}
          href={href ?? ''}
          ref={ref}
          {...props}
        ></a>
      </>
    )
  }
)
Link.displayName = 'Link'

export default Link
