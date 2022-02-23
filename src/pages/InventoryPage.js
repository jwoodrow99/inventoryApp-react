import React, { useEffect, useState } from 'react';
import service from '../service/service';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function InventoryPage() {

  const [items, setItems] = useState([]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  const [updateItemSelected, setUpdateItemSelected] = useState('');

  const [updateItemName, setUpdateItemName] = useState('');
  const [updateItemPrice, setUpdateItemPrice] = useState('');
  const [updateItemQuantity, setUpdateItemQuantity] = useState('');

  useEffect(() => {
    service.item.get().then(res => {
      setItems(res.data);
    });
  }, []);

  const newItem = () => {
    service.item.post({
      name: newItemName,
      price: newItemPrice,
      quantity: newItemQuantity
    }).then(res => {
      setItems([...items, {
        name: newItemName,
        price: newItemPrice,
        quantity: newItemQuantity
      }]);
    });
  }

  const deleteItem = (item) => {
    service.item.delete({
      id: item._id
    }).then(res => {
      let newItems = items.filter((itemObj) => {
        if(itemObj._id != item._id){
          return itemObj;
        }
      });
      setItems(newItems);
    });
  }

  const updateItem = (item) => {
    setUpdateItemSelected(item);
    setUpdateItemName(item.name);
    setUpdateItemPrice(item.price);
    setUpdateItemQuantity(item.quantity);
  }

  const updateItemRequest = () => {
    service.item.patch({id: updateItemSelected._id}, {
      name: updateItemName,
      price: updateItemPrice,
      quantity: updateItemQuantity
    }).then(res => {

      let newItemsArr = items.map(item => {
        if(item._id == updateItemSelected._id){
          return {
            _id: item._id,
            name: updateItemName,
            price: updateItemPrice,
            quantity: updateItemQuantity
          }
        } else {
          return item;
        }
      });

      setItems(newItemsArr);

      setUpdateItemSelected('');
      setUpdateItemName('');
      setUpdateItemPrice('');
      setUpdateItemQuantity('');
    });
  }

  return (
    <div>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>

        <div>

          <p>New Item</p>

          <TextField label="Item Name" variant="standard" value={newItemName} onChange={(e) => setNewItemName(e.target.value)}/><br/>
          <TextField label="Item Price" variant="standard" value={newItemPrice} onChange={(e) => setNewItemPrice(e.target.value)} /><br/>
          <TextField label="Item Quantity" variant="standard" value={newItemQuantity} onChange={(e) => setNewItemQuantity(e.target.value)} /><br/>
          <br/>
          <Button variant="contained" onClick={() => newItem()}>Create New Item</Button>

        </div>

        <div>

          <p>Update Item</p>

          <TextField label="Item Name" variant="standard" value={updateItemName} onChange={(e) => setUpdateItemName(e.target.value)}/><br/>
          <TextField label="Item Price" variant="standard" value={updateItemPrice} onChange={(e) => setUpdateItemPrice(e.target.value)} /><br/>
          <TextField label="Item Quantity" variant="standard" value={updateItemQuantity} onChange={(e) => setUpdateItemQuantity(e.target.value)} /><br/>
          <br/>
          <Button variant="contained" onClick={() => updateItemRequest()}>Update Item</Button>

        </div>

      </div>

      <hr/>

      <ul>
        {items.map((item, index) => {
          return <li>{item.name}<Button onClick={() => deleteItem(item)}>Delete!</Button><Button onClick={() => updateItem(item)}>Update!</Button></li>
        })}
      </ul>
    </div>
  )
}

export default InventoryPage