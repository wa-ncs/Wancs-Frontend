import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Board = ({ boardNo, title, views, id, content }) => {
  return (
    <TableRow>
      <TableCell>{boardNo}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{id}</TableCell>
      <TableCell>{views}</TableCell>
      <TableCell>{content}</TableCell>
    </TableRow>
  );
};

export default Board;
