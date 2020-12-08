import { Link } from "react-router-dom";
import { TimeOverviewAnalyzer } from "../xsound/analyzers/TimeOverviewAnalyzer";
import { TechniqueManager } from "../xsound/TechniqueManager";

const Analyze = () => {
    return <div>
        
        <TimeOverviewAnalyzer apiUrl={""} key={"analyzer"} w={800} h={100} />
        <TechniqueManager/>
        
    </div>;
}
 
export default Analyze;