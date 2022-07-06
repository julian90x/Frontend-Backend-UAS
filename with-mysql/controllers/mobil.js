const res = require('express/lib/response')
const Mobil = require('../models/mobil')

module.exports = {
    getMobil: (req, res) => {
        Mobil.getMobil((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Terjadi Error",
                });
            } else {
                res.send(data);
            }
        })
    },

    insert : (req,res)=>{
        //Ambil data request dari front end
        if (!req.body) {
            res.status(400).send({message : "Data tidak boleh kosong"})
        }
    Mobil.insert(req.body,(err,data) =>{
        if (err) {
            res.status(500).send({
                message : err.message || "Terjadi Error"
            })
        }else{
            res.send(data)
        }
    })},

    getMobilById : (req,res)=>{
        Mobil.getMobilById(req.params.id,(err,data)=>{
           if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message : `Mobil dengan Id ${req.params.id} tidak di temukan`
                })
            }
            else{
                res.status(500).send({
                    message : "Data tidak tersedia"
                })
            }
           }
           else{
               res.send(data)
           }
        }) 
    },

    update : (req,res)=>{
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be  empty"
            });
        }
        Mobil.update(req.params.id,req.body,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Mobil dengan Id ${req.params.id} tidak di temukan`
                    })
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    })
                }
               }
               else{
                   res.send(data)
               }    
        })
    },

    delete : (req,res)=>{
        Mobil.delete(req.params.id,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Mobil dengan Id ${req.params.id} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    });
                }
               }
               else{
                   res.send({message: `Mobil sudah di hapus`});
               }            
        });
    },
    getSpek_mobilById : (req,res)=>{
        Mobil.getSpek_mobilById(req.params.id,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Mobil dengan Id ${req.params.id} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        spek_mobil : []
                    });
                }
               }
               else{
                   res.send(data);
               }            
        });
    }
}