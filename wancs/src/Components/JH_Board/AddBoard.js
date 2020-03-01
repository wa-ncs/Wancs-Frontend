import React, { useState } from 'react';

const AddBoard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //   const sendInfo = () => {
  //     const url = '/v1/board';
  //     const formData = new FormData();
  //     formData.append('title', { title });
  //     formData.append('content', content);

  //     return post(url, formData);
  //   };

  const onChangTitle = e => {
    setTitle(e.target.value);
  };
  const onChangContent = e => {
    setContent(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    // sendInfo.then(response => {
    //   console.log(response);
    // });
  };

  return (
    <div>
      <form action="/v1/board" method="POST">
        <input type="text" name="title" value={title} onChange={onChangTitle} placeholder="제목을 입력하세요" />
        <textarea name="content" value={content} onChange={onChangContent} placeholder="내용을 입력하세요" />
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};

export default AddBoard;
