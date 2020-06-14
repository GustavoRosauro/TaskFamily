const db= require("../config/database");

exports.post = (req,res)=>{
    const {titulo,descricao,finalizado} = req.body;
    db.query(
        "INSERT INTO tasks (titulo,descricao,finalizado,data_criacao) VALUES ($1,$2,$3,now())",
        [titulo,descricao,finalizado]
        );
        res.send(true);
 }
 exports.get = (req,res)=>{
    db.query(
        "SELECT * FROM tasks ORDER BY data_alteracao desc, data_criacao DESC",(err, row)=>{
            if(err) console.log(err)
            else res.send(row.rows);
        }
    )
}
        exports.put = (req,res)=>{
            const {id} = req.params
            const {finalizado} = req.body
            db.query(
                "UPDATE tasks SET finalizado = $1, data_alteracao = now() where id = $2",
                [finalizado,id]
            );
            res.send(true);
        } 
exports.delete = (req,res)=>{
    const {id} = req.params;
    db.query(
        "DELETE FROM tasks where id = "+ id
    );
    res.send(true);
}  
exports.deleteAll = (req,res)=>{
    db.query(
        "DELETE FROM tasks"
    );
    res.send(true)
}
exports.putItem = (req,res)=>{
    const {id} = req.params
    const {titulo,descricao} = req.body
    db.query("UPDATE tasks SET titulo = $1, descricao = $2 where id = $3",[titulo,descricao,id]);
    res.send(true);
}      