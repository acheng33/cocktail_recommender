import React, { Component } from 'react';
import { Table } from 'reactstrap';

class CocktailList extends Component {
    render() {
        const cocktails = this.props.cockatils;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Cocktail Name</th>
                        <th>Amount</th>
                        <th>Ingredient</th>
                    </tr>
                </thead>
            </Table>
        )
    }
}