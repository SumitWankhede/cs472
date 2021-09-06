<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>JSP Quiz</title>
    <style><%@include file="/WEB-INF/css/style.css"%></style>
</head>
<body>
<form method="get">
    <h3>JSP NumberQuiz!</h3>
    <p>Your current score is: ${quiz.getScore()}
    <p>Guess the next number in the sequence!<br />
        ${quiz.getQuestion()}
    <p>Your answer:<input type='text' name='txtAnswer' value='' /></p>
    <c:if test="${error}">
        <div class="wrongAns">
            <p>Error Wrong ans<p>
        </div>
    </c:if>
    <p><input type='submit' name='btnNext' value='Next' /></p>
    <p><input type='reset' name='rest' value='Reset' /></p>
</form>
</body>
</html>
