import React from 'react'
import { useRuntime } from 'vtex.render-runtime'

type Disposition = {
  order: number
  desktop: boolean
  tablet: boolean
  mobile: boolean
}

const DispositionLayout: StorefrontComponent = ({
  children,
  disposition,
}: {
  children: React.ComponentType
  disposition: Disposition[]
}) => {
  const { deviceInfo } = useRuntime()
  const array = React.Children.toArray(children)

  if (deviceInfo.type === 'desktop') {
    const sortedChildrenDesktop =
      disposition
        ?.filter(({ order, desktop }) => order && desktop)
        .map(({ order }) => array[order - 1]) ?? children

    return sortedChildrenDesktop
  }

  if (deviceInfo.type === 'tablet') {
    const sortedChildrenTablet =
      disposition
        ?.filter(({ order, tablet }) => order && tablet)
        .map(({ order, tablet }) => {
          if (tablet === deviceInfo.isMobile && deviceInfo.type === 'tablet') {
            return array[order - 1]
          }

          return []
        }) ?? children

    return sortedChildrenTablet
  }

  if (deviceInfo.type === 'phone') {
    const sortedChildrenMobile =
      disposition
        ?.filter(({ order, mobile }) => order && mobile)
        .map(({ order, mobile }) => {
          if (mobile === deviceInfo.isMobile && deviceInfo.type === 'phone') {
            return array[order - 1]
          }

          return []
        }) ?? children

    return sortedChildrenMobile
  }

  return []
}

DispositionLayout.schema = {
  title: 'admin/editor.dispositionlayout.title',
  description: 'admin/editor.dispositionlayout.description',
  type: 'object',
}

export default DispositionLayout
