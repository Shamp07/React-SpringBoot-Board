package kr.co.upcoding.controller;
 
import kr.co.upcoding.mapper.BoardMapper;
import kr.co.upcoding.mapper.CommonMapper;
import kr.co.upcoding.mapper.UserMapper;
import kr.co.upcoding.vo.AccountVO;
import kr.co.upcoding.vo.CategoryVO;
import kr.co.upcoding.vo.PostVO;
import kr.co.upcoding.vo.ReplyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Controller
public class MyController {
	
	@Autowired
    UserMapper userMapper;

    @Autowired
    CommonMapper commonMapper;

    @Autowired
    BoardMapper boardMapper;

 
    @GetMapping(value = {"/", "/posting", "/post/{bpId}" })
    public String page(Model model ) {
        model.addAttribute("pageName", "main");
        return "page";
    }

    @PostMapping("/login")
    @ResponseBody
    public String login(@RequestBody AccountVO accountVO, HttpServletRequest req){
        List<AccountVO> voList = userMapper.login(accountVO);
        if(voList.size() == 1){
            req.getSession().setAttribute("USER_SESSION_KEY",voList.get(0));
            return "Success";
        }else
            return "fucked";
    }

    @PostMapping("/logincheck")
    @ResponseBody
    public String loginCheck(HttpServletRequest req){
        if(req.getSession().getAttribute("USER_SESSION_KEY") != null) {
            return ((AccountVO) req.getSession().getAttribute("USER_SESSION_KEY")).getUser_name();
        }

        return "false";
    }

    @PostMapping("/logout")
    @ResponseBody
    public String logout(HttpServletRequest req){
        req.getSession().invalidate();
        return "Success";
    }

    @PostMapping("/getcatetory")
    @ResponseBody
    public List<CategoryVO> getCategory(){
        return commonMapper.getCatetory();
    }

    @PostMapping("/addpost")
    @ResponseBody
    public String getCategory(@RequestBody PostVO postVO,HttpServletRequest req){

        // 글의 작성자는 세션에 저장되어 있는 객체에서 가져온다.
        String writer =  ((AccountVO) req.getSession().getAttribute("USER_SESSION_KEY")).getU_id();
        postVO.setBp_writer(writer);

        // 답글이 아니라면 DEPTH 는 1 고정
        if(postVO.getBp_id_reply() == null || postVO.getBp_id_reply().equals(""))
            postVO.setBp_depth("1");

        int result = boardMapper.addPost(postVO);

        if(result == 1)
            return "Success";
        else
            return "Fucked";
    }

    @PostMapping("/getpost")
    @ResponseBody
    public List<PostVO> getPost(@RequestBody Map<String,Object> params){
        return boardMapper.getPost((String)params.get("category"));
    }

    @PostMapping("/getpostdata")
    @ResponseBody
    public PostVO getPostData(@RequestBody Map<String,Object> params){
        return boardMapper.getPostData((String)params.get("bp_id"));
    }

    @PostMapping("/addreply")
    @ResponseBody
    public String addReply(@RequestBody ReplyVO replyVO,HttpServletRequest req){
        System.out.println(replyVO);
        // 덧글의 작성자는 세션에 저장되어 있는 객체에서 가져온다.
        String writer =  ((AccountVO) req.getSession().getAttribute("USER_SESSION_KEY")).getU_id();
        replyVO.setBr_writer(writer);

        // 답글(덧글의)이 아니라면 DEPTH 는 1 고정
        if(replyVO.getBr_id_reply() == null || replyVO.getBr_id_reply().equals(""))
            replyVO.setBr_depth("1");

        int result = boardMapper.addReply(replyVO);
        if(result == 1)
            return "Success";
        else
            return "Fucked";
    }

    @PostMapping("/getreplylist")
    @ResponseBody
    public List<ReplyVO> getReplyList(@RequestBody Map<String,Object> params){
        return boardMapper.getReplyList((String)params.get("bp_id"));
    }
}