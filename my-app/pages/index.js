import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/dist/client/link";
import Nav from "../component/user/Nav";
import { useRouter } from "next/router";
import UserLayout from "../component/user/UserLayout";
export default function Home(props) {
  return (
    <div>
      <UserLayout>
        <div>
          <main role="main">
            <section className="jumbotron text-center">
              <div className="container">
                <h1 className="jumbotron-heading">Ardhans Rental Mobil Banyuwangi</h1>
                <p className="lead text-muted">Layanan rental mobil Banyuwangi dengan armada terbaru, bersih & terawat.</p>
                <p>
                  <a href="#" className="btn btn-primary my-2">Main call to action</a>
                  <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                </p>
              </div>
            </section>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  {props.data.map((mbl,index)=>{
                    return ( <div key={index} className="col-md-4">
                    <div className="card mb-4 box-shadow">
                      <img className="card-img-top" src="/mobil.jpg" alt="Card image cap" />
                      <div className="card-body">
                        <p className="card-text">{mbl.nama_mobil}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <a className="btn btn-sm btn-outline-secondary" href={`/user/${mbl.id}`}>view</a>
                          
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>)
                  })}
                 
                </div>
              </div>
            </div>
          </main>
          <footer className="text-muted">
            <div className="container">
              <p className="float-right">
                <a href="#">Back to top</a>
              </p>
              <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
            </div>
          </footer>
        </div>

      </UserLayout>
    </div>

  )
}

export async function getServerSideProps({query}) {
  let url = 'http://localhost:5000/mobil'
  const res = await fetch(url)
  const data = await res.json()
  
  return {props : {data}}
}