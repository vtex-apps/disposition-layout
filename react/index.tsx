import * as React from 'react'

type Disposition = {
  order: number
  show: boolean
}

const DispositionLayout: StorefrontComponent = ({
  children,
  disposition,
}: {
  children: React.ComponentType
  disposition: Disposition[]
}) => {
  const array = React.Children.toArray(children) as any
  const sortedChildren = disposition
    ?.filter(({ order, show }) => order && show)
    .map(({ order }) => {
      if (array.length === 1) {
        return array[0].props.children[order - 1]
      }

      return array[order - 1]
    })

  return sortedChildren
}

DispositionLayout.schema = {
  title: 'admin/editor.dispositionlayout.title',
  description: 'admin/editor.dispositionlayout.description',
  type: 'object',
}

export default DispositionLayout
