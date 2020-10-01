import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Highlight from '../Highlight/Highlight';
import meals from '../../mealsdummy.json';
// import './MealTable.css'

const MealTable = ({ id }) => {

    // console.log("Meals = ",...meals())

    let mealsOffered;
    if (id === 'breakfast') {
        console.log("breakfast = ", meals.breakfast)
        mealsOffered = meals.breakfast
    }
    else if (id === 'lunch') {
        console.log("lunch = ", meals.lunch)
        mealsOffered = meals.lunch
    }

    else if (id === "snacks") {
        console.log("snacks = ", meals.snacks)
        mealsOffered = meals.snacks
    }
    else if (id === 'dinner') {
        console.log("dinner = ", meals.dinner)
        mealsOffered = meals.dinner
    }
    return !mealsOffered.length ?
        <h1>No Meals Found</h1> :
        (<>
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
                    {
                        mealsOffered.map((user, i) => {
                            // if (mealsOffered[i].mealTime === window.location.pathname.split('/meals/')[1]) {
                            return (<>
                                <tr>
                                    <td>{mealsOffered[i].name}</td>
                                    <td>{mealsOffered[i].nutrition.protein}</td>
                                    <td>{mealsOffered[i].nutrition.carb}</td>
                                    <td>{mealsOffered[i].nutrition.fat}</td>
                                    <td>{mealsOffered[i].weight}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0', margin: '0' }}><Highlight height='2px' /></td>
                                    <td style={{ padding: '0', margin: '0' }}><Highlight height='2px' /></td>
                                    <td style={{ padding: '0', margin: '0' }}><Highlight height='2px' /></td>
                                    <td style={{ padding: '0', margin: '0' }}><Highlight height='2px' /></td>
                                    <td style={{ padding: '0', margin: '0' }}><Highlight height='2px' /></td>
                                </tr>
                            </>
                            )
                            // }
                        })
                    }
                </tbody>
            </Table> </>
        )
}

export default MealTable;