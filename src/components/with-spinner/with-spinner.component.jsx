import { SpinnerOverlay, SpinnerContainer } from "./with.spinner.styles";

// HOC
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
        )
        :
        (<WrappedComponent { ...otherProps }/>)
    
}

export default WithSpinner;