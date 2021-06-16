import './custom-button.styles.scss'

const CustomButton = ({ handleClick, children, inverted, ...otherProps }) => (
    <button className={`${inverted? 'inverted' : ''} custom-button`}
        onClick={ handleClick }>
        { children }
    </button>
) 
export default CustomButton