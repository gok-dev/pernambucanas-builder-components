import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>{text}</div>
}

export const DefaultImage = ({ src }: { src: string }) => {
  return (
    <div>
      <img src={src} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

const rFCStringMapper = {
  ExampleComponent: ExampleComponent,
  DefaultImage: DefaultImage
}

export const transformJsonToRFC = (
  json: { name: string; props: any }[]
): React.ReactElement[] => {
  const Components = json.map(item => {
    return React.createElement(rFCStringMapper[item.name], {
      ...item.props
    })
  })

  return Components
}
