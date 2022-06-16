import styled from '@emotion/styled'

type StyledNumberProps = {
    isBold?: boolean
}
const StyledNumber = styled.span<StyledNumberProps>`
    font-weight: ${({ isBold }) => isBold ? 'bold' : 'normal'}
`

type PropTypes = StyledNumberProps & {
    children: string
}

const GridNumber: React.FC<PropTypes> = ({ children, isBold}) => (
    <StyledNumber isBold={isBold}>
        {children}
    </StyledNumber>
)

export default GridNumber
