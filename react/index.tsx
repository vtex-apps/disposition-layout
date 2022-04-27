import React from 'react'

type Disposition = {
  order: number
  show: boolean
}

const DispositionLayout: StorefrontComponent = ({
  children,
  disposition,
}: {
  children: any
  disposition: Disposition[]
}) => {
  const array = React.Children.toArray(children) as any
  let sortedChildren;
  if (array.length==1) {// LIVE
    sortedChildren = disposition?.filter(({ order, show }) => order && show).map(({ order }) => array[0].props.children[order - 1]) ?? children  
  }
  else{ //CMS
    sortedChildren = disposition?.filter(({ order, show }) => order && show).map(({ order }) => array[order - 1]) ?? children  
  }

  return sortedChildren
}

DispositionLayout.schema = {
  title: 'admin/editor.dispositionlayout.title',
  description: 'admin/editor.dispositionlayout.description',
  type: 'object',
}

export default DispositionLayout
