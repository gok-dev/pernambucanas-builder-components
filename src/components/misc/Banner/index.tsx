import React from 'react'
import { Typography } from 'index'
import { SketchPicker } from 'react-color'
import * as S from './styles'
import { Event, IBannerPageBuilder } from './types'
import { Plus } from '../Icons/Plus'

export const Banner = (props: IBannerPageBuilder) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(true)
  const [isShownColorPicker, setIsShownColorPicker] =
    React.useState<boolean>(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const bannerRef = React.useRef<HTMLInputElement>(null)
  const [color, setColor] = React.useState<string>('')

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    props.onChange({
      ...props,
      description: { ...props.description, [name]: value }
    })
  }

  const onChangeImage = (event: Event<HTMLInputElement>) => {
    const { files } = event.target
    if (files!.length === 0) {
      return
    }

    const file = files![0]
    const fileReader = new FileReader()

    fileReader.onload = () => {
      props.onChange({ ...props, image: fileReader.result })
    }
    fileReader.readAsDataURL(file)
  }

  return (
    <S.Container
      onClick={() => inputRef.current?.click()}
      onMouseLeave={() => setIsShownColorPicker(false)}
      ref={bannerRef}
      image={props.image}
    >
      <S.ButtonFontColor
        onClick={event => {
          event.stopPropagation()
          setIsShownColorPicker(true)
        }}
      >
        Cor da fonte
      </S.ButtonFontColor>
      {isShownColorPicker && (
        <S.ColorPickerBox
          onClick={event => event.stopPropagation()}
          className="color-picker"
        >
          <SketchPicker
            onChange={event => {
              props.onChange({ ...props, color: event.hex }),
                setColor(event.hex)
            }}
          />
        </S.ColorPickerBox>
      )}
      <S.Content color={props.color}>
        <input
          type="text"
          name="text1"
          defaultValue="LOREM IPSUM 2021"
          readOnly={isEditing}
          value={props.description.text1}
          onChange={onChangeInput}
          onClick={event => {
            event.stopPropagation()
            setIsEditing(false)
          }}
        />
        <input
          type="text"
          name="text2"
          defaultValue="Lorem Ipsum Dolar"
          readOnly={isEditing}
          value={props.description.text2}
          onChange={onChangeInput}
          onClick={event => {
            event.stopPropagation()
            setIsEditing(false)
          }}
        />
        <input
          type="text"
          name="text3"
          value={props.description.text3}
          readOnly={isEditing}
          defaultValue="sit amet, consectetur adipiscing elit."
          onChange={onChangeInput}
          onClick={event => {
            event.stopPropagation()
            setIsEditing(false)
          }}
        />
        <S.ButtonEditBox color={props.color}>
          <button
            onClick={event => {
              event.stopPropagation(),
                props.onChange({ ...props, isShownModal: true })
            }}
          >
            <Typography.Text size={14} weight={300} customColor={color}>
              Lorem
            </Typography.Text>
          </button>
          <button
            onClick={event => {
              event.stopPropagation(),
                props.onChange({ ...props, isShownModal: true })
            }}
          >
            <Typography.Text size={14} weight={300} customColor={color}>
              Lorem
            </Typography.Text>
          </button>
        </S.ButtonEditBox>

        <input
          className="input-file-hidden"
          type="file"
          ref={inputRef}
          onChange={onChangeImage}
        />
      </S.Content>
      <S.IconBox>
        <Plus />
      </S.IconBox>
    </S.Container>
  )
}
