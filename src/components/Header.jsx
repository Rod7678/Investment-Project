import investmentImg from '../assets/investment-calculator-logo.png'

export default function Header (){
    return (
        <header id="header">
            <img src={investmentImg} alt="styled logo" />
             <h1>React Investment Calculator</h1>
        </header>
    )
}