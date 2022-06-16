import { Text } from '@chakra-ui/react'

import styled from '@emotion/styled'


export const TableRowHeading = (props: any) => {
    return (
        <Text fontSize='0.8rem' color='#333' style={{ textTransform: 'uppercase', }} >
            { props.children }
        </Text>
    );
}
