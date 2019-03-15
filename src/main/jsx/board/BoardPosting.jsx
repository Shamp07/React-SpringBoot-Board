import React from 'react';
import styled from "styled-components";
import * as rs from 'reactstrap';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class BoardPosting extends React.Component {


    render(){

        const Board_Header = styled.div`
            height : 200px;
            padding : 10px;
            padding-top : 50px;
            width : 900px;
            margin : 0 auto;
        `;

        const Board_wrapper = styled.div`
            width : 900px;
            height : 70vh;
            border : 1px solid #e6e6e6;
            padding : 0.8rem;
            margin-top : 200px;
            margin : 0 auto;
            font-size : 15px;
            margin-bottom : 20px;
        `;

        return(
            <React.Fragment>
                <Board_Header>
                    <h1>글 작성</h1>
                    <rs.Input type="select" className="mb-2">
                        <option>카테고리 1</option>
                        <option>카테고리 2</option>
                        <option>카테고리 3</option>
                        <option>카테고리 4</option>
                        <option>카테고리 5</option>
                    </rs.Input>
                    <rs.Input  placeholder="글의 제목을 입력해주세요.." />
                </Board_Header>
                <Board_wrapper>
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Hello from CKEditor 5!</p>"
                        onInit={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log(editor);
                            editor.ui.view.height = "500px";
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                        } }
                    />
                </Board_wrapper>
            </React.Fragment>
        )
    }
    
}

export default BoardPosting;