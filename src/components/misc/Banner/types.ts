export interface IBannerPageBuilder {
  description: {
    text1: string
    text2: string
    text3: string
  }
  buttons: {
    text1: string
    text2: string
    link1: string
    link2: string
  }
  color: string
  image: string | ArrayBuffer | null
  isShownModal: boolean
  onChange: (param: IBannerPageBuilder) => void
}

export interface Event<T = EventTarget> {
  target: T
}

export interface IColorPicker {
  rgb: string
}
