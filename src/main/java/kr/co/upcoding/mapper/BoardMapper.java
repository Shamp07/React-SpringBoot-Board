package kr.co.upcoding.mapper;

import kr.co.upcoding.vo.PostVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    int addPost(PostVO post);
    List<PostVO> getPost(String category);
}
