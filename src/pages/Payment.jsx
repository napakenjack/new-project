import styled from 'styled-components'
import Pay from '../components/Pay'
import Success from '../components/Success'

const Router = styled.div`

`
const Switch = styled.div`

`
const Route = styled.div`

`


const Payment = () => {
    return (
        <Router>
            <Switch>
                <Route path="/pay">
                    <Pay/>
                </Route>
                <Route path="/success">
                    <Success/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Payment
