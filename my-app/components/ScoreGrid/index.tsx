
import React, { useMemo } from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import GridNumber from './GridNumber'
import { mockHoleTableData } from './mockData'
import { GridNumberVariants } from './constants'
export type Hole = {holeName: string, distance: number, par: number}
type CourseHoleTableProps = {
    holes: Array<Hole>
    scores: Array<{name: string, scores: Array<number>}>
}

const CourseHoleTable: React.FC<CourseHoleTableProps> = ({holes, scores}) => {
    const holeComponents = useMemo(() =>
       holes.reduce((acc, hole) => {
            acc.holeNames = acc.holeNames.concat(
                <Th key={hole.holeName}>
                    {hole.holeName}
                </Th>
            )

            acc.holeDistances = acc.holeDistances.concat(
                 <Th key={`${hole.holeName}-${hole.distance}`}>
                    {hole.distance}
                </Th>
            )

            acc.holePars = acc.holePars.concat(
                 <Th key={`${hole.holeName}-${hole.par}`}>
                    {hole.par}
                </Th>
            )

            return acc
        },{holeNames: [], holeDistances: [], holePars: []} as any
    ), [holes])

    const {holeNames, holeDistances, holePars} = holeComponents

    return (
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Hole</Th>
                        {holeNames}
                    </Tr>
                    <Tr>
                        <Th>Distance</Th>
                        {holeDistances}
                    </Tr>
                     <Tr>
                        <Th>Par</Th>
                        {holePars}
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                    <GridNumber>
                        {8}
                    </GridNumber>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

const ScoreGrid: React.FC = () => {
    return (
        <CourseHoleTable holes={mockHoleTableData.holes} scores={mockHoleTableData.scores}/>
    )
}

export default ScoreGrid
