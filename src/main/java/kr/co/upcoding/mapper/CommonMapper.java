package kr.co.upcoding.mapper;

import kr.co.upcoding.vo.CategoryVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommonMapper {
    List<CategoryVO> getCatetory();
}
