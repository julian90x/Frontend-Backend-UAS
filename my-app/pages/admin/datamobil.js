import "bootstrap/dist/css/bootstrap.min.css"
import DataMobil from "../../component/admin/DataMobil"
const datamobil =({data}) =>{
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <div>
        <DataMobil data ={data}/>
        </div>
        </>
    )
}

export async function getServerSideProps({query}) {
    const id = query.id
    let url = 'http://localhost:5000/mobil'
    if (typeof id === 'string') {
        url = `http://localhost:5000/mobil/${id}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    
    return {props : {data}}
}

export default datamobil;