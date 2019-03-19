package kr.co.upcoding.mapper;

import kr.co.upcoding.vo.PostVO;
import kr.co.upcoding.vo.ReplyVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    int addPost(PostVO post);
    List<PostVO> getPost(String category);
    PostVO getPostData(String bp_id);
    int addReply(ReplyVO replyVO);
    List<ReplyVO> getReplyList(String bp_id);
}
