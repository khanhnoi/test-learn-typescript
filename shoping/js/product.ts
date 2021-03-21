export class Product {
    private _id: Number;
    private _name: String;
    private _price: Number;
    private _description: String;
    private _status: Boolean;
    private _image: String;

    
    //id
    public id() : Number {
        return this._id
    }
 
    public  setId(v : number) {
        this._id = v;
    }
    //name
    public name() : String {
        return this._name
    }
 
    public  setName(v : String) {
        this._name = v;
    }
     //price
     public price() : Number {
        return this._price
    }
 
    public  setPrice(v : number) {
        this._price = v;
    }
    //status
    public status() : Boolean {
        return this._status
    }
 
    public  setStatus(v : Boolean) {
        this._status = v;
    }
     //description
     public description() : String {
        return this._description
    }
 
    public  setDescription(v : String) {
        this._description = v;
    }
     //image
     public image() : String {
        return this._image
    }
 
    public  setImage(v : String) {
        this._image = v;
    }
    
    // public set id(v : Number) {
    //     this.id = v;
    // }
    
 
    
    

    constructor(id: Number,name: String,price: Number, description: String,status: Boolean,image: String) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._status = status;
        this._image = image;
        
    }

}