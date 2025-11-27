import { FunctionComponent } from "react";

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = () => {
  return <h1>Hello world!</h1>
}

export default App;
