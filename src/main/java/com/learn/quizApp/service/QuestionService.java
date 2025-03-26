package com.learn.quizApp.service;

import com.learn.quizApp.model.Question;
import com.learn.quizApp.repository.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class QuestionService {

    @Autowired
    QuestionRepo questionrepo;

    public List<Question> getAllQuestions() {
       return questionrepo.findAll();
    }

    public List<Question> getQuestionsByCategory(String category) {
        return questionrepo.findByCategory(category);
    }

    public String addQuestion(Question question) {
         questionrepo.save(question);
         return "success";
    }
}
