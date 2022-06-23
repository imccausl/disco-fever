import type { Hole } from '.'

export const generateMockHoles = (numOfHoles: number) => {
    const holes: Array<Hole> = []

    for(let i=0; i<numOfHoles; i++) {
        const distance = Math.floor(Math.random() * 100)

        holes.push({
            holeName:`${i+1}`,
            distance,
            par: 3
        })
    }
    return holes
}

const generateMockScore = () => {
     const score = Math.floor((Math.random() * 10) + 1)
    return score < 9 ? score : 3
}
export const generateMockUserData = (name: string, numOfHoles: number = 18) => {
    const userData: {name: string, scores: Array<number>} = {name, scores:[]}

    for (let i=0;i<numOfHoles;i++) {
        userData.scores.push(generateMockScore())
    }

    return userData
}

export const mockHoleTableData ={
    holes: generateMockHoles(18),
    scores: [generateMockUserData('Paul'), generateMockUserData('Simon'), generateMockUserData('Paige')]
}

