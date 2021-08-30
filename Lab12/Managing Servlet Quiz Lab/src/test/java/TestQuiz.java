import edu.mum.cs472.jspquizlab.Quiz;
import org.junit.*;
import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;

public class TestQuiz {
	Quiz quizUnderTest = new Quiz();
	public TestQuiz() {
	}

	@BeforeClass
	public static void setUpClass() throws Exception {
	}

	@AfterClass
	public static void tearDownClass() throws Exception {
	}

	@Before
	public void setUp() {
	}

	@After
	public void tearDown() {
	}

	@Test
	public void testIsCorrect() {
		assertTrue("first question answer should be '9'", quizUnderTest.isCorrect("9"));
	}

	@Test
	public void testGetNumberQuestions() {
		assertEquals(5, quizUnderTest.getNumQuestions());
	}

	@Test
	public void testGetNumberCorrect() {
		assertEquals(0, quizUnderTest.getNumCorrect());
		quizUnderTest.scoreAnswer(); //should increment the score and the current question number
		assertEquals("[1,8,27,64,125,?]", quizUnderTest.getNumCorrect());
		assertEquals("[1,8,27,64,125,?]", quizUnderTest.getCurrentQuestion());
	}
}
