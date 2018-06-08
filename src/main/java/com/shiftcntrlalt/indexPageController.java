package com.shiftcntrlalt;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class indexPageController {

    @RequestMapping(value = "/")
    public String indexPage(){
        return "index";
    }
}
