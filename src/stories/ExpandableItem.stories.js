import { ExpandableItem } from "../components/generic/ExpandableItem";

export default {
    title: 'ExpandableItem',
    component: ExpandableItem,
}

const details = [
    {
        label: 'Account holder',
        value: 'Keshav Sharma'
    },
    {
        label: 'Date of receipt',
        value: '2020'
    }
]


const Template = (args) => <ExpandableItem {...args} />

export const AllDetails = Template.bind({});
AllDetails.args = {
   title: 'Document 1',
   details,
   displayDownloadButton: true
}
