import { CustomButtonContainer } from './custom-button.styles'
//import './custom-button.styles.scss'

const CustomButton = ({ handleClick, children, ...props }) => (
    <CustomButtonContainer { ...props } onClick={ handleClick }>
        { children }
    </CustomButtonContainer>
) 
export default CustomButton