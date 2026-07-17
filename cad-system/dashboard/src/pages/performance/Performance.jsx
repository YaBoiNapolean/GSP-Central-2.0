import PageHeader from "../../components/common/PageHeader";

import PerformanceChart from "../../components/analytics/PerformanceChart";

export default function Performance(){

    return(

        <>

            <PageHeader

                title="Performance"

                subtitle="Department metrics and officer analytics."

            />

            <PerformanceChart/>

        </>

    );

}