import React from 'react'

const DispositionLayout: StorefrontComponent = ({
  children,
  order,
}: {
  children: React.ComponentType
  order: number[]
}) => {
  const array = React.Children.toArray(children)
  const sortedChildren = order
    .filter((item) => item)
    .map((index) => array[index - 1])

  return sortedChildren
}

DispositionLayout.schema = {
  title: 'admin/editor.dispositionlayout.title',
  description: 'admin/editor.dispositionlayout.description',
  type: 'object',
}

export default DispositionLayout
