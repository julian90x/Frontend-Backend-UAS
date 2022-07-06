import { useState } from "react";
import axios from "axios";

const CreateMobil = () => {
    const [id, setId] = useState('');
    const [nama_mobil, setNama_mobil] = useState('');
    const [tahun, setTahun] = useState('');
    const [warna, setWarna] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/mobil", {
                    id,
                    nama_mobil,
                    tahun,
                    warna,
                })
                .then(response => {
                    console.log(response)
                });
            alert("Penambahan Data Sukses")
            clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }

    const clearInput = () => {
        setId('')
        setNama_mobil('')
        setTahun('')
        setWarna('')
    }
        return (
            <div>
                <div className="container mt-4">
                    <form className="w-50 mx-auto" onSubmit={submitHandler}>
                        <h1 className="w-75 text-center">Input Mobil</h1>
                        <div className="w-75">
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="id"
                                    placeholder="ID"
                                    type="text"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                />
                                <label htmlFor="id">ID</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="nama_mobil"
                                    placeholder="Nama_mobil"
                                    type="text"
                                    value={nama_mobil}
                                    onChange={(e) => setNama_mobil(e.target.value)}
                                />
                                <label htmlFor="nama">Nama Mobil</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="tahun"
                                    placeholder="tahun"
                                    type="text"
                                    value={tahun}
                                    onChange={(e) => setTahun(e.target.value)}
                                />
                                <label htmlFor="Tahun">Tahun</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="warna"
                                    placeholder="Warna"
                                    type="text"
                                    value={warna}
                                    onChange={(e) => setWarna(e.target.value)}
                                />
                                <label htmlFor="Warna">Warna Mobil</label>
                            </div>
                        </div>
                        <div className=" w-75 d-flex flex-row-reverse">
                            <button className="btn btn-primary" type="submit">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    export default CreateMobil;