import {calculateInvestmentResults, formatter} from '../util/investment';

export default function Results({values}) {
    const valuesArray = calculateInvestmentResults(values);
    console.log(valuesArray)
    const initialInvestment = valuesArray[0].valueEndOfYear - valuesArray[0].interest-valuesArray[0].annualInvestment;

    return (

            <table id='result' className="center"> 
                <thead>
                    <tr>
                    <th>year</th>
                    <th>investment value</th>
                    <th>interest(year)</th>
                    <th>total interest</th>
                    <th>investment capital</th>
                    </tr>
                </thead>
                <tbody>
                        {valuesArray.map((value)=>{

                            const totalInterest = value.valueEndOfYear - value.annualInvestment * value.year - initialInvestment;
                            const totalAnnualInvestment = value.valueEndOfYear - totalInterest;
                            return (
                                    <tr key={value.year}>
                                    <td >{value.year}</td>
                                    <td>{formatter.format(value.valueEndOfYear)}</td>
                                    <td>{formatter.format(value.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAnnualInvestment)}</td>
                                    </tr>
                        )})
                        }
                </tbody>
            </table>
    )
}