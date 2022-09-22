import React, {useState, useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";

const alankey ='781850a6b72e538fbd5d3544e3631a7e2e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: ({command, articles}) => {
                if(command === 'newHeadlines'){
                    alert('This code was executed');
                }
            }
        })
    },[])

    return(
        <div>
            <h1>Alan AI News Application</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    );
}

export default App;
