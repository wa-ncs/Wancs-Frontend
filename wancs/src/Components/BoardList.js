import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Board from './Board';

const BoardList = () => {
    const [boardList, setBoardList] = useState("");

    const onBoardList = async () => {
        const response = await fetch('/v1/board');
        const body = await response.json();
        console.log(body);
        setBoardList(body);
        return body;
    }
    return (
        <div>
            <button onClick={onBoardList}>게시판 조회</button>
            {boardList ? 
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>작성자</TableCell>
                        <TableCell>조회수</TableCell>
                        <TableCell>내용</TableCell>
                    </TableRow>
                </TableHead>
                
                <TableBody>
                    {boardList.map(c => {
                        return (<Board key={c.board_no} board_no={c.board_no} title={c.title} id={c.id} content={c.content} views={c.views} />)
                    })}
                </TableBody>
            </Table>
:""}
        </div>
    );
};

export default BoardList;
