import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/dist/client/link";
import Nav from "../component/user/Nav" 
import { useRouter } from "next/router";
import UserLayout from "../component/user/UserLayout";
export default function Home() {
  const data_mahasiswa =[ 
    {nim : '11103201', nama : 'Carlos'},
    {nim : '11103202', nama : 'Rizki'},
    {nim : '11103203', nama : 'Raihan'}
  ];
  const router = useRouter()
  const sendParamRouter = (nim) =>{
    router.push(`/user/${nim}`)    
  }
  return (
    <div>
      <UserLayout>
      <main>
        <h3>Daftar Mahasiswa</h3>
        <ul>
          {data_mahasiswa.map((mhs,idx)=>(
            <>
            <li key={idx}>
              <Link href={`/user/${mhs.nim}`}>
              {mhs.nim}
              </Link>
              <p>{mhs.nama}</p>
              <button className="btn- btn-primary" onClick={(e) =>sendParamRouter(mhs.nim)}>Cek Nilai</button>
            </li>
            </>
          ))}
        </ul>
      </main>
      </UserLayout>
    </div>
    
  )
}
