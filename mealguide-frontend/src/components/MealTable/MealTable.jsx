import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Highlight from '../Highlight/Highlight';
// import './MealTable.css'

const MealTable = ({}) => {
    return (
        <Table responsive hover borderless style={{ marginLeft: '20px' }}>
            <thead>
                <tr>
                    <th></th>
                    <th>Proteins (g)</th>
                    <th>Carbs (g)</th>
                    <th>Fats (g)</th>
                    <th>Weight (g)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Eggs</td>
                    <td>12</td>
                    <td>0</td>
                    <td>8</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                </tr>
                <tr>
                    <td>Eggs</td>
                    <td>12</td>
                    <td>0</td>
                    <td>8</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                    <td style={{padding:'0', margin:'0'}}><Highlight height='2px'/></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default MealTable;