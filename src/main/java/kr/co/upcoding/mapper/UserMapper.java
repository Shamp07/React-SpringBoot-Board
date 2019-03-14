package kr.co.upcoding.mapper;

import kr.co.upcoding.vo.AccountVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<AccountVO> login(AccountVO accountVO);
}
