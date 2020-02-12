class ShoppingCart {
  constructor(){
    this.total=0;
    this.items={};
  }
  addItem(itemName,quantity,price){
    this.quantity=quantity;
    this.price=price;
    this.total+=this.quantity*this.price;
    this.items[itemName]=this.quantity;
    
  }
  wishList(itemName,quantity){
    this.items[itemName]=quantity;
  }
  
  removeItem(itemName,quantity,price){
    this.quantity=quantity;
    this.price=price;
    this.total-=this.quantity*this.price;
    this.items[itemName]-=this.quantity;
    //if state for dic
    if(this.quantity>this.items[itemName])
   delete   this.itemName;
  }
  checkout(cashPaid){
    if (cashPaid< this.total)
      return 'Cash paid is not sufficient';
    else
      return cashPaid-this.total;
  }
}

class Shop extends ShoppingCart{
  
  constructor(quantity){
    super();
    this.quantity=quantity;
  }
  
  removeItem(){
  
    this.quantity-=1;
  }
}
