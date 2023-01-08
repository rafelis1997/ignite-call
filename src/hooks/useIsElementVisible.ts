import { RefObject, useEffect, useState } from 'react'

interface Props {
  ref: RefObject<Element>
  rootMargin?: string
}

export function useIsElementVisible({ ref, rootMargin = '-200px' }: Props) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin },
    )

    const element = ref.current

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [ref, rootMargin])

  return isIntersecting
}
