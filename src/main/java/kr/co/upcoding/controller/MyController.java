package kr.co.upcoding.controller;
 
import kr.co.upcoding.mapper.UserMapper;
import kr.co.upcoding.vo.AccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class MyController {
	
	@Autowired
    UserMapper userMapper;
 
    @GetMapping("/")
    public String page(Model model) {
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
}