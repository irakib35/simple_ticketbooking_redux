import { Provider } from "react-redux";
import Header from "./Header";
import InputData from "./components/InputData";
import PreviewData from "./components/PreviewData";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <section>
                    <InputData />
                    <PreviewData />
                </section>
            </div>
        </Provider>
    );
}

export default App;
