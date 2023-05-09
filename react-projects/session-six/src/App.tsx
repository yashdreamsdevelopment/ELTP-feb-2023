import { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import DeleteModal from "./components/DeleteModal/DeleteModal";
const App = () => {
    const [showSpinner, setShowSpinner] = useState(false);

    return <>
        { showSpinner && <Spinner /> }
        <DeleteModal />
    </>
}

export default App;