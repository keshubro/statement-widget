import AccountSelector from "../components/AccountSelector";

export default {
    title: 'AccountSelector',
    component: AccountSelector,
}

const accounts = [
    {
      id: "1",
      accountHolder: "Keshav Sharma",
      accountNumber: "1234567890",
      accountBalance: "123",
    },
    {
      id: "2",
      accountHolder: "Madhav Sharma",
      accountNumber: "32345454663",
      accountBalance: "1456",
    },
];

const Template = (args) => <AccountSelector {...args} />

export const AllDetails = Template.bind({});
AllDetails.args = {
    accounts: accounts
}
