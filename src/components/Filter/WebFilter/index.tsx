/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { IWebFilter } from './types'
import { Collapse } from 'react-collapse'
import Icons from 'components/Icons'
import { useLayout } from 'hooks/layout'
import * as S from './styles'

export const WebFilter: React.FC<IWebFilter> = ({
  filters,
  initialFilterCollapseOpen
}) => {
  const layout = useLayout()

  React.useEffect(() => {
    if (initialFilterCollapseOpen && initialFilterCollapseOpen?.length > 0) {
      layout.setFilterCollapseOpen(initialFilterCollapseOpen)
    }

    return () => layout.setFilterCollapseOpen([])
  }, [])

  return (
    <S.Container>
      <S.FilterList>
        {filters.map((filter, index) => (
          <S.FilterItem key={index.toString()}>
            <S.FilterBox>
              <S.FilterBoxHeader
                onClick={() => layout.toggleFilterCollapseOpen(index)}
              >
                <S.FilterBoxHeaderTitle>{filter.title}</S.FilterBoxHeaderTitle>
                {layout.filterCollapseOpen.includes(index) ? (
                  <Icons.CollapseOpen size={10} />
                ) : (
                  <Icons.CollapseClose size={10} />
                )}
              </S.FilterBoxHeader>
              <Collapse isOpened={layout.filterCollapseOpen.includes(index)}>
                <S.FilterBoxContent>
                  {filter.items.map(item =>
                    item.renderItem ? (
                      item.renderItem
                    ) : (
                      <S.FilterBoxContentList>
                        <S.FilterBoxContentItem>
                          <S.FilterBoxContentItemCheckbox
                            id={item.value}
                            name={item.value}
                            value={item.value}
                          ></S.FilterBoxContentItemCheckbox>
                          <S.FilterBoxContentItemLabel htmlFor={item.value}>
                            <S.FilterBoxContentItemLabelText>
                              {item.label}
                            </S.FilterBoxContentItemLabelText>
                          </S.FilterBoxContentItemLabel>
                        </S.FilterBoxContentItem>
                      </S.FilterBoxContentList>
                    )
                  )}
                </S.FilterBoxContent>
              </Collapse>
            </S.FilterBox>
          </S.FilterItem>
        ))}
      </S.FilterList>
    </S.Container>
  )
}
