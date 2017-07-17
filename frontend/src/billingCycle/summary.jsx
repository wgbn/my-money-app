import React from 'react'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols="12">
        <fieldset>
            <legend>Resumo</legend>
        </fieldset>
        <Row>
            <ValueBox
                color="green"
                icon="bank"
                value={`R$ ${credit}`}
                text="Total de créditos"
                cols="12 4"/>
            <ValueBox
                color="red"
                icon="credit-card"
                value={`R$ ${debt}`}
                text="Total de débitos"
                cols="12 4"/>
            <ValueBox
                color="blue"
                icon="money"
                value={`R$ ${(credit-debt)}`}
                text="Total consolidado"
                cols="12 4"/>
        </Row>
    </Grid>
)