import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Board from './Board';

const BoardList = () => {
  const [boardList, setBoardList] = useState('');

  useEffect(() => {
    async function getList() {
      const response = await fetch('/v1/board');
      const body = await response.json();
      console.log(body);
      setBoardList(body);
    }
    getList();
  }, []); //끝에 빈 배열을 넣어주면 초기 렌더링때만 실행하고 update 땐 동작안함

  return (
    <div>
      {boardList ? (
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
            {boardList.map(b => {
              return <Board key={b.boardNo} {...b} />;
            })}
          </TableBody>
        </Table>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default BoardList;
