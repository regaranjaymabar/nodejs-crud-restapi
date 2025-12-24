import db from "../config/db.js";

//1.Menampilkan data dari table
//sql ? SELECT * FROM users
export const getUsers = (req,res) => {
    db.query('SELECT * FROM user',(err,result) => {
        if(err) res.status(500).json({message:err});
        res.json(results);
        });
};

//2.Menyimoan data
export const insertUsers = (req,res) => {
    const {name,email,password} = req.body;

    db.query (
        "INSERT INTO user (name,email,password) VALUES (?,?,?)",
        [name,email,password],
        (err,results) => {
            if(err) res.status(500).json({massage: err});
            res.json({massage : "Data berhasil disimpan"});
        }
    );
};

//3.Menampilkan data erdasarkan id
//sql ? SELECT * WHEHE id=?
export const showUser = (req,res) => {
    const{id} = req.params;

    db.query("SELECT * FROM user WHERE id=?",[id],(err,results) => {
        if(err)res.status(500).json({message: err});

        if(results.length === 0) {
            return res.status(400).json({message:"usertidak ditemukan"});
        }
        res.json(result[0]);
    });
};

//4.update berdasarkan id
export const updateUser = (req,res) => {
    const {id} = req.params;
    const {name,email} = req.body;

    db.query(
        "UPDATE user SET name=? WHERE id=?",
        [name,email,id],
        (err,result) => {
            if(err)res.status(500).json({message: err});

            res.json({message: "Data Behasil di Update"});
        }); 
};

//5.Hapus data berdasakan id
export const deleteUsers = (req,res) => {
    const {id} = req.params;

    db.query("DELETE FROM user WHERE id=?",[id],(err,results)=>{
         if(err)res.status(500).json({message: err});

         res.json("Data Berhasil Dihapus")

    })
}