describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the typewriter effect with correct strings", () => {
    cy.get(".typewriter-container").contains(
      "Your guided path to programming enlightenment. Become proficient in JavaScript."
    );
  });

  it('should navigate to the quiz page when "Go to Quiz" button is clicked', () => {
    cy.get(".button").click();
    cy.url().should("include", "/quiz");
  });

  it("should display three flip cards", () => {
    cy.get(".flip").should("have.length", 3);
  });

  it("should display text on each flip card", () => {
    cy.get(".flip").each(($flip) => {
      cy.wrap($flip).find(".front").should("exist");
      cy.wrap($flip).find(".back").should("exist");
    });
  });
});

describe("Answering quiz questions and showing results", () => {
  it("Answers quiz questions and shows results", () => {
    cy.visit("http://localhost:3000/quiz");
    cy.get("#Topic").select("Finger Foods");
    cy.get("#Expertise").select("Novice");
    cy.get("#numQuestions").select("5");
    cy.get("#style").select("Jedi");
    cy.get(".btn.btn-primary").click();
  });
});

describe("Reaching Landing page and navigating to the Quiz Generation page via button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Finds Go To Quiz Button", () => {
    cy.get(".button").contains("Go to Quiz");
  });
  it("Clicks Go To Quiz Button", () => {
    cy.get(".button").contains("Go to Quiz").click();
  });
});
describe("Selecting quiz options from dropdowns and generating a quiz", () => {
  it("Fills out and generates a quiz", () => {
    cy.visit("http://localhost:3000/quiz");
    cy.get("#Topic").select("Finger Foods");
    cy.get("#Expertise").select("Novice");
    cy.get("#numQuestions").select("5");
    cy.get("#style").select("Jedi");
    cy.get(".btn.btn-primary").click();
  });
});
describe("Reaching Landing page and checking navigation to Quiz generation page, account page, and results page works and back using the navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Finds Quiz Nav Options", () => {
    cy.get(".nav-link").contains("Quiz").click();
    cy.get(".nav-link").contains("Account").click();
    cy.get(".nav-link").contains("Result").click();
    cy.get(".nav-link").contains("Home").click();
  });
});
