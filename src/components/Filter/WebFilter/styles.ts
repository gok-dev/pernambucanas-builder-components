import Typography from 'components/Typography'
import styled from 'styled-components'

export const Container = styled.div``

export const FilterList = styled.ul``

export const FilterItem = styled.li`
  border-bottom: 1px solid ${props => props.theme.colors.base.weak};
  padding: 22px 0;

  &:last-child {
    border-bottom: none;
  }
`

export const FilterBox = styled.article``

export const FilterBoxHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 42px;

  &:hover {
    cursor: pointer;
  }
`

export const FilterBoxHeaderTitle = styled(Typography.Heading).attrs({
  size: 16,
  color: 'title'
})``

export const FilterBoxHeaderAction = styled.div``

export const FilterBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`

export const FilterBoxContentList = styled.ul``

export const FilterBoxContentItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 32px;
`

export const FilterBoxContentItemCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid ${props => props.theme.colors.base.weak};
  border-radius: 3px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }

  &:checked {
    background: ${props => props.theme.colors.contrast.default};
    border-color: ${props => props.theme.colors.contrast.default};
  }

  &:before {
    content: '';
    width: 0.6em;
    height: 0.6em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #fff;
    transform-origin: center;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked::before {
    transform: scale(1);
  }
`

export const FilterBoxContentItemLabel = styled.label`
  display: flex;
  flex: 1;
  padding-left: 14px;

  &:hover {
    cursor: pointer;
  }
`

export const FilterBoxContentItemLabelText = styled(Typography.Text).attrs({
  weight: 500,
  size: 14,
  color: 'title'
})``
