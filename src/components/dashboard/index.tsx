import Summary from "../Summary";
import TransactionsTable from "../TransactionTable";
import { Container } from "./style";


const Dashboard = () => {
  return (
    <Container>
        <Summary />
        <TransactionsTable />
    </Container>
  )
}

export default Dashboard;