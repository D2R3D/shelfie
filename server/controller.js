
module.exports = {


    getInventory: (req, res) => {
        res.status(200).send('Are we working?')
    },

    addItem: (req, res) => {
        const {name, price, imgurl} = req.body;
        let id;
            if(inventory.length === 0){
            id = 1;
        } else {
            id = inventory[inventory.length -1].id +1
        }
        
        const newInventory = {
            name,
            price,
            imgurl
        }
            inventory.push(newInventory)
            res.status(200).send(inventory)
        },

}