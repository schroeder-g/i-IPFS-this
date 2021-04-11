import React from 'react'
import account from '../../styles/account.sass'
import Layout from '../common/Layout'
import { Container } from 'react-bootstrap'

export default function Dashboard() {
    return (
        <Layout>
            <Container>
                <h1> 
                    This is the dashboard
                </h1>
            </Container>
        </Layout>
    )
}
