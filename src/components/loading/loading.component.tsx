import { FunctionComponent } from "react"
import { LoadingContainer } from "./loading.style"
import { SyncLoader } from "react-spinners";

const LoadingComponent: FunctionComponent = () => {
    return  <LoadingContainer>
                <SyncLoader size={30}/>
            </LoadingContainer>
}

export default LoadingComponent;