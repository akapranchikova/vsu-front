package com.aqualen.vsu.controllers;

import com.aqualen.vsu.services.TournamentsService;
import com.aqualen.vsu.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Slf4j
@Controller
@RequestMapping("/tournaments")
public class TournamentsController {

    @Autowired
    TournamentsService tournamentsService;

    @Autowired
    UserService userService;

    @GetMapping("")
    public String getAllNews(ModelMap modelMap, Principal principal){
        modelMap.addAttribute("tournaments", tournamentsService.getAll());
        if (principal != null){
            modelMap.addAttribute("user", userService.findByUsername(principal.getName()));
        }
        return "tournaments";
    }
}
