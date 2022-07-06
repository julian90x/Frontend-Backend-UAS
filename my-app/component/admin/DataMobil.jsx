import LayoutAdmin from "./LayoutAdmin";
import MobilByID from "./MobilById";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const DataMobil = ({ data }) => {
  const [message, setmessage] = useState(false);
  const router = useRouter();
  async function hapusMobil(id) {
    try {
      const response = await axios.delete(`http://localhost:5000/mobil/${id}`);
      if (response.data.message) {
        setmessage(response.data.message);
      }
      alert(`Mobil dengan ID ${id} telah dihapus`);
    } catch (error) {
      console.log({ message: error.message });
    }
    Router.push("/admin/datamobil");
  }

  return (
    <>
      <LayoutAdmin>
        <div className="container mt-3">
          <h2>Data Mobil</h2>
          <MobilByID />
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nama Mobil</th>
                <th>Tahun</th>
                <th>warna</th>
              </tr>
            </thead>
            <tbody>
              {data.map((mbl, idx) => (
                <tr key={idx}>
                  <td>{mbl.id}</td>
                  <td>{mbl.nama_mobil}</td>
                  <td>{mbl.tahun}</td>
                  <td>{mbl.warna}</td>
                  <td>
                    <Link
                      href={`/admin/updatemobil?id=${mbl.id}&nama_mobil=${mbl.nama_mobil}&tahun=${mbl.tahun}&warna=${mbl.warna}`}
                    >
                      <a className="btn btn-success">Edit</a>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      value={mbl.id}
                      onClick={(e) => hapusMobil(e.target.value)}
                      className="btn btn-danger btn-md"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LayoutAdmin>
    </>
  );
};
export default DataMobil;
