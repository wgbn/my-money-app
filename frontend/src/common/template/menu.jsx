import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#/" icon="dashboard" label="Dashboard"/>
        <MenuItem path="#/movies" icon="film" label="Filmes"/>

        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/billingCycle" icon="usd" label="Ciclo de Pagamentos"/>
        </MenuTree>
    </ul>
)