
const sql = require("./db")


module.exports = {
     insert : (mobilBaru,result) => {
       sql.query("insert into mobil SET ?",mobilBaru,(err,res)=>{
           if (err) {
               console.log("error",err);
               result(err,null)
               return;
           }
           result(null, {id: res.insertId, ...mobilBaru});
       })
    },

    getMobil : (result) =>{
        let query = "Select * From mobil";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },

    getMobilById : (id, result) =>{
        let query = `Select * From mobil Where id =${id}`;
        console.log(id)
        sql.query(query, (err, res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            if (res.length) {
                result(null,res[0]);
                return
            }
            console.log(res)
            result ({kind : "not_found"},null)
        })
    },
    update:(id,mobil,result)=>{
        sql.query(
            "UPDATE mobil SET nama_mobil = ?, tahun = ?, warna = ? WHERE id = ?",
            [mobil.nama_mobil, mobil.tahun, mobil.warna, id],
            (err,res) => {
                if (err) {
                    console.log("error",err);
                    result(null,err);
                    return;
                }
                if (res.affectedRows = 0) {
                    result(null, err);
                    return;
                }
                console.log("updated mobil : ",{id: id, ...mobil});
                result(null,{id: id, ...mobil});   
            }
        )
    },
    delete: (id, result) =>{
        sql.query("DELETE FROM mobil WHERE id = ?", id,(err,res)=>{
            if (err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({kind : "not_found"},null);
                return;
            }
            console.log("deleted mobil with ID : ",id);
            result(null,res);
        });
    },
    getSpek_mobilById:(id,result) =>{
        try {
            sql.query(`SELECT mobil.id,mobil.nama_mobil,mobil.tahun,mobil.warna,spek_mobil.id,spek_mobil.id_mesin,spek_mobil.bbm,spek_mobil.kapasitas,spek_mobil.tenaga,transmisi_mobil.id_mesin,transmisi_mobil.transmisi FROM mobil,transmisi_mobil,spek_mobil WHERE mobil.id=${id} AND mobil.id  = spek_mobil.id AND spek_mobil.id_mesin = transmisi_mobil.id_mesin`,(err,res) =>
            {
                result(null,res)
            }
            );
        } catch (error) {
            result(error,null)
        }
    }
}