import "bootstrap/dist/css/bootstrap.min.css"
import Data_Mobil from "../../component/user/Data_Mobil";
import UserLayout from "../../component/user/UserLayout";


export default function data_mobil({data}) {

    return (
        <UserLayout>
            <div className="container mt-3">
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
                <div  className="col-md-4">
                    <div className="card mb-4 box-shadow">
                      <img className="card-img-top" src="/mobil.jpg" alt="Card image cap" />
                      <div className="card-body">
                        <p className="card-text">{data.nama_mobil}</p>
                        <p className="card-text">{data.tahun}</p>
                        <p className="card-text">{data.warna}</p>
                      
                      </div>
                    </div>
                  </div>
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
            </div>
        </UserLayout>
    )
}

export async function getServerSideProps({query}) {
    const id = query.id;
    let url = `http://localhost:5000/mobil/${id}`
    const res = await fetch(url)
    const data = await res.json()
    
    return {props : {data}}
  }