package com.learn.quizApp.service;

import com.learn.quizApp.model.Question;
import com.learn.quizApp.model.QuestionWrapper;
import com.learn.quizApp.model.Quiz;
import com.learn.quizApp.model.Response;
import com.learn.quizApp.repository.QuestionRepo;
import com.learn.quizApp.repository.QuizRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {
    @Autowired
    QuizRepo quizRepo;

    @Autowired
    QuestionRepo questionRepo;


    public ResponseEntity<String> createQuiz(String category, int noOfQuestions, String title) {

        List<Question> questions=questionRepo.findRandomQuestionsByCategory(category,noOfQuestions);
        Quiz quiz=new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questions);
        quizRepo.save(quiz);
        return  new ResponseEntity<>("sucess", HttpStatus.CREATED);
    }


    public ResponseEntity<List<QuestionWrapper>> getQuizQuestion(Integer id) {
        Optional<Quiz> quiz= quizRepo.findById(id);
        List<Question>questionFromDB=quiz.get().getQuestions();
        List<QuestionWrapper>questionForUser=new ArrayList<>();
        for(Question q :questionFromDB){
            QuestionWrapper qw=new QuestionWrapper(q.getId(),q.getQuestionTitle(),q.getOption1(),q.getOption2(),q.getOption3(),q.getOption4());
            questionForUser.add(qw);
        }
        return new ResponseEntity<>(questionForUser,HttpStatus.OK);
    }

    public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
        Quiz quiz=quizRepo.findById(id).get();
        List<Question>questions=quiz.getQuestions();
        int right=0;
        int i=0;
        for(Response response:responses){
            if(response.getResponse().equals(questions.get(i).getRightAnswer()))
                right++;

            i++;
        }
        return  new ResponseEntity<>(right,HttpStatus.OK);
    }
}
