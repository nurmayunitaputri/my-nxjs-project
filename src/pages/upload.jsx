import Head from "next/head"; 
import UploadContainer from '../containers/upload'; 

    const UploadPage = () => { 
        return ( 
        <> 
            <Head>  
                <title>BinarGram - Upload</title> 
            </Head> 
            <UploadContainer /> 
        </> 
    ) 
}


const ChartsPage = () => {
    return (
      <div className="grid lg:grid-cols-3 gap-2 grid-cols-1 p-3">
        {/* <LineChartContainer />
        <BarChartContainer />
        <PieChartContainer /> */}
      </div>
    )
  }

export default UploadPage; 
