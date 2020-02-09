import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Board = ({board_no, title, views, id, content}) => {
    return (
        <TableRow>
            <TableCell>{board_no}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{id}</TableCell>
            <TableCell>{views}</TableCell>
            <TableCell>{content}</TableCell>
        </TableRow>
    )

}

export default Board;
