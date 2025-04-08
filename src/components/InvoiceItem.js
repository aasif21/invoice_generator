import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiTrash } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ItemRow = ({ item, currency, onItemizedItemEdit, onDelEvent }) => {
  const handleChange = (e) => {
    onItemizedItemEdit({
      target: {
        id: item.id,
        name: e.target.name,
        value: e.target.value
      }
    });
  };

  return (
    <tr>
      <td style={{ width: '100%' }}>
        <InputGroup className="my-1 flex-nowrap">
          <Form.Control
            type="text"
            name="name"
            placeholder="Item name"
            value={item.name || ''}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup className="my-1 flex-nowrap">
          <Form.Control
            type="text"
            name="description"
            placeholder="Item description"
            value={item.description || ''}
            onChange={handleChange}
          />
        </InputGroup>
      </td>
      <td style={{ minWidth: '70px' }}>
        <InputGroup className="my-1 flex-nowrap">
          <Form.Control
            type="number"
            name="quantity"
            min="1"
            step="1"
            value={item.quantity || 1}
            onChange={handleChange}
            required
          />
        </InputGroup>
      </td>
      <td style={{ minWidth: '130px' }}>
        <InputGroup className="my-1 flex-nowrap">
          <InputGroup.Text className="bg-light fw-bold border-0 text-secondary px-2">
            <span className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small" style={{ width: '20px', height: '20px' }}>
              {currency}
            </span>
          </InputGroup.Text>
          <Form.Control
            type="number"
            name="price"
            min="0.01"
            step="0.01"
            value={item.price || '1.00'}
            onChange={handleChange}
            className="text-end"
            required
          />
        </InputGroup>
      </td>
      <td className="text-center" style={{ minWidth: '50px' }}>
        <BiTrash
          onClick={() => onDelEvent(item)}
          style={{ height: '33px', width: '33px', padding: '7.5px' }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

const InvoiceItem = ({ items, currency, onItemizedItemEdit, onRowAdd, onRowDel }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              currency={currency}
              onItemizedItemEdit={onItemizedItemEdit}
              onDelEvent={onRowDel}
            />
          ))}
        </tbody>
      </Table>
      <Button className="fw-bold" onClick={onRowAdd}>
        Add Item
      </Button>
    </div>
  );
};

export default InvoiceItem;
