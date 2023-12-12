import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

interface Product {
  name: string;
  gross_price: number;
  net_price: number;
  vat: number;
  stock: number;
  available: {
    available: number;
    total: number;
  };
}

const headers = ['Name', 'Gross Price', 'Net Price', 'VAT', 'Stock', 'Available (Available/Total)'];

const MyTable = () => {
  const [tableData, setTableData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setTableData(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.gross_price}</TableCell>
              <TableCell>{product.net_price}</TableCell>
              <TableCell>{product.vat}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{`${product.available.available}/${product.available.total}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default MyTable;
