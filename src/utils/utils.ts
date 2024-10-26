import sanitizeHtml from 'sanitize-html'

export const classNames = (...classes: Array<string>): string => {
  return classes.filter(Boolean).join(' ')
}

export const isEmptyValue = (
  value: unknown,
): value is null | undefined | Record<string, never> | [] => {
  if (value instanceof Date) {
    return !value.getTime()
  }
  return (
    value == null ||
    Number.isNaN(value) ||
    (typeof value === 'object' &&
      Object.keys(value as Record<string, unknown>).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}
export const formatDate = (inputDate: string): string => {
  const parsedDate = new Date(inputDate)
  const formattedDate = parsedDate
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, (match, month, day, year) => {
      return `${day}.${month}.${year}`
    })

  return formattedDate
}

export const sanitizeAllHtmlContent = (content = '') =>
  sanitizeHtml(content || '', {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'a']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt'],
      a: ['href', 'title', 'style', 'class'],
    },
    transformTags: {
      a: (tagName, attribs) => {
        return {
          tagName: 'a',
          attribs: {
            ...attribs,
            class: `${attribs.class ? `${attribs.class} ` : ''}underline`,
          },
        }
      },
    },
  })

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

export const getPaginationRange = (currentPage: number, totalPages: number) => {
  const delta = 2
  const range = []
  const rangeWithDots = []
  let l

  range.push(1)
  for (let i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i < totalPages && i > 1) {
      range.push(i)
    }
  }
  range.push(totalPages)

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
}
