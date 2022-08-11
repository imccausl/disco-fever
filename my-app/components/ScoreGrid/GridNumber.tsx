import { useMemo } from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'

import { GridNumberVariants} from './constants'

type StyledNumberProps = {
    isBold?: boolean
    backgroundColor?: string
}

const GridNumberVariantToColorValue = {
    [GridNumberVariants.NEUTRAL]: '#ffffff',
    [GridNumberVariants.UNDER_PAR]: '#3abeff',
    [GridNumberVariants.OVER_PAR]: 'ff8c8a',
}
const MAX_OVER_PAR=4

const StyledNumber = styled.span<StyledNumberProps>`
    font-weight: ${({ isBold }) => isBold ? 'bold' : 'normal'}
`

type PropTypes = StyledNumberProps & {
    children: string | number
    variant?: typeof GridNumberVariants[keyof typeof GridNumberVariants]
    parValue?: number
}

const GridNumber: React.FC<PropTypes> = ({ children, parValue, isBold, variant = GridNumberVariants.NEUTRAL }) => {
    const bgColorValue = useMemo(() => {
        const gridValue = Number(children)
        if (!Number.isNaN(gridValue) && parValue !== undefined && (variant !== GridNumberVariants.NEUTRAL || gridValue === parValue)) {
        const darkenAmount = gridValue + parValue >= MAX_OVER_PAR ? 4 : Math.abs(gridValue - parValue)
            return darken(darkenAmount, GridNumberVariantToColorValue[variant])
        }

        return GridNumberVariantToColorValue[variant]

    },[children, parValue, variant])

   return (
    <StyledNumber isBold={isBold} backgroundColor={bgColorValue}>
        {children}
    </StyledNumber>
)}

export default GridNumber
