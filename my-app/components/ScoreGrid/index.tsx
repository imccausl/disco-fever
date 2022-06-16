
import { useMemo } from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import GridNumber from './GridNumber'

type CourseHoleTableProps = {
    holes: Array<{holeName: string, distance: number, par: number}>
}

const CourseHoleTable: React.FC<CourseHoleTableProps> = ({holes}) => {
    const holeNames = useMemo(() => {}, [])

    return (
        <TableContainer>
            <Thead>

            </Thead>
        </TableContainer>
    )
}

const ScoreGrid: React.FC = () => {
    return (
        <GridNumber isBold={true}>10</GridNumber>
    )
}

export default ScoreGrid
