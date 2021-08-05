import React from 'react'

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
  const array = React.Children.toArray(children)
  const sortedChildren = disposition
    .filter(({ order, show }) => order && show)
    .map(({ order }) => array[order - 1])

  return sortedChildren
}

DispositionLayout.schema = {
  title: 'admin/editor.dispositionlayout.title',
  description: 'admin/editor.dispositionlayout.description',
  type: 'object',
}

export default DispositionLayout
