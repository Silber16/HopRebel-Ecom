import Prod from "../models/productos.js";

export class ProdController{

    static allProdC (req, res, next) {
        Prod.find({})
            .then(prods => {
                if (prods && prods.length > 0) {
                    res.status(200).json(prods);
                } else { 
                    res.send('prods está vacío');
                }
            })
            .catch(err => (next(err)))
    }

     static categoryItemsC (req, res, next) {
         const categoria = req.params.categoria
         Prod.find({categoria})
            .then(results => {
                if (results.length <= 0) {
                   res.status(404).send(console.error('no existe esa categoria'))
                }
                res.status(200).json(results);
                })
            .catch(err => next(err))         
                
     }

     static prodNameC (req, res) {
         const name = req.params.name
         Prod.findOne({name: name})
            .then(result => {
                if (!result) {
                    res.status(404).send(console.error('No se encontró el producto'));
                }
                res.status(200).json(result)
            })
            .catch(err => next(err))
        
     }
}