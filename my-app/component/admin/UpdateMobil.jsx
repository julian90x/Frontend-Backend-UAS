import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const Updatemobil = () => {
  const [_id, setId] = useState("");
  const [_nama_mobil, setNama_mobil] = useState("");
  const [_tahun, setTahun] = useState("");
  const [_warna, setWarna] = useState("");

  const router = useRouter();
  const { id, nama_mobil, tahun, warna } = router.query;

  useEffect(() => {
    if (typeof id == "string") {
      setId(id);
    }
    if (typeof nama_mobil == "string") {
      setNama_mobil(nama_mobil);
    }
    if (typeof tahun == "string") {
      setTahun(tahun);
    }
    if (typeof warna == "string") {
      setWarna(warna);
    }
  }, [id, nama_mobil, tahun, warna]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/mobil/${_id}`, {
          nama_mobil: _nama_mobil,
          tahun: _tahun,
          warna: _warna,
        })
        .then((response) => {
          console.log(response);
        });
      alert("update Data Sukses");
      router.push("/admin/datamobil");
    } catch (e) {
      console.log({ mesaage: e.mesaage });
    }
  };
  return (
    <>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 text-center">Edit Data Mobil</h1>
          <div className="form-floating">
            <input
              className="form-control mb-2"
              id="id"
              placeholder="ID"
              type="text"
              value={_id}
              onChange={(e) => setId(e.target.value)}
            />
            <label htmlFor="id">ID</label>
          </div>
          <div className="form-floating">
            <input
              className="form-control mb-2"
              id="nama_mobil"
              placeholder="Nama"
              type="text"
              value={_nama_mobil}
              onChange={(e) => setNama_mobil(e.target.value)}
            />
            <label htmlFor="nama">Nama Mobil</label>
          </div>
          <div className="form-floating">
            <input
              className="form-control mb-2"
              id="tahun"
              placeholder="Tahun"
              type="text"
              value={_tahun}
              onChange={(e) => setTahun(e.target.value)}
            />
            <label htmlFor="tahun">Tahun</label>
          </div>

          <div className="form-floating">
            <input
              className="form-control mb-2"
              id="warna"
              placeholder="Warna"
              type="text"
              value={_warna}
              onChange={(e) => setWarna(e.target.value)}
            />
            <label htmlFor="warna">Warna</label>
          </div>
          <div className=" w-75 d-flex flex-row-reverse">
            <button className="btn btn-primary" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Updatemobil;
