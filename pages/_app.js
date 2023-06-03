import { Children } from "react"
import '../styles/globals.css';
const App = ({ Component, pageProps }) => {
    return (
        <Component{...pageProps} />
    )
}
export default App;