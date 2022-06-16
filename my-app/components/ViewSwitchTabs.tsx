
import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'

const ViewSwitchTabs = ( props: any) => {
    return (
        <Tabs align='end' variant='enclosed'>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default ViewSwitchTabs;
